import { APIRequestOptions } from "./APIRequestOptions";
import ApiResponse from "./ApiResponse";
const uuidv4 = require('uuid/v4');

export async function makeRequest(requestOptions: APIRequestOptions) {
    const serverUrl = process.env.REACT_APP_API_URL;
    // fetch above from .env files

    const path = `${serverUrl}/${requestOptions.path}`;
    const correlationId = uuidv4();
    const credentials: RequestCredentials = "omit";

    let options = {
        method: requestOptions.method,
        headers: {
            'Content-Type': 'application/json',
            'x-correlation-id': correlationId,
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
        },
        credentials,
        body: undefined
    };

    if (requestOptions.data) {
        // @ts-ignore
        options.body = JSON.stringify(requestOptions.data) as string;
    }

    //log('Info',`API: Request ${requestOptions.method} ${path} (cid:${correlationId} sid:${sessionId})`);

    const response = await fetch(path, options);

    // log('Info',`API: Response ${response.status} ${requestOptions.method} ${path} (cid:${correlationId} sid:${sessionId})`);

    if (response.status < 200 || response.status >= 400) {
        throw new Error(response.statusText);
    }

    let returnValue: ApiResponse | null = null;
    try {
        returnValue = await parseResponse(response, path, options);
    } catch (e) {
        //    log('Error', `API: Unable to parse response for: ${response.status} ${requestOptions.method} ${path} (cid:${correlationId} sid:${sessionId})`);
    }

    return returnValue;
}

async function parseResponse(response: any, path: string, options: any) {
    const text = await response.text();

    if (text) {
        try {
            let apiResponse: ApiResponse = {
                data: {},
                status: { isPending: true, hasError: false, message: '' }
            };
            const json = JSON.parse(text);
            apiResponse.data = json.data;
            apiResponse.status.hasError = (json.statusType !== "SUCCESS");
            apiResponse.status.message = json.message;
            return apiResponse;

        } catch (e) {
            return null;
        }
    } else {
        //  log('Debug',`API: ResponsePayload: ${response.status} ${options.method} ${path}`, 'Empty');
        return null;
    }
}
