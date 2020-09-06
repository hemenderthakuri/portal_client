/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import * as api from "../api/api";
import { plainToClass } from 'class-transformer';
import ApiResponse from '../api/ApiResponse';

interface ApiRequestActions<T> {
    makeRequest: (data?: any) => void;
    setData: (data: T) => void;
}

export function useApiRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    type: any
): [T, ApiRequestActions<T>, RequestStatus] {
    const [response, setResponse] = useState<T>(([] as unknown) as T);
    const initialStatus = { isPending: false, hasError: false, message: '' };
    const [requestStatus, setRequestStatus] = useState<RequestStatus>(initialStatus);

    const makeRequest = useCallback(async (data?: any) => {
        try {
            setRequestStatus({ isPending: true, hasError: false, message: 'Calling api' });

            const response: ApiResponse | null = await api.makeRequest({ method, path, data });
            if (response) {
                setResponse(plainToClass(type, response.data as T));
                setRequestStatus({ ...response.status, isPending: false });
            } else {
                setRequestStatus({ isPending: false, hasError: false, message: '' });
            }

        } catch (error) {
            setRequestStatus({ isPending: false, hasError: true, message: 'Could not complete request' });
            //  log('Debug', `useApiRequest: Error: ${error.message}`);
        }
    }, []);

    return [response, { makeRequest, setData: setResponse }, requestStatus];
}
