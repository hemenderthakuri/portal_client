/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import * as api from "../api/api";
import { plainToClass } from "class-transformer";
import ApiResponse from "../api/ApiResponse";

export function useFetch<T>(url: string, type: any): [T, RequestStatus, (data: T) => void] {
    const [data, setData] = useState<T>([] as unknown as T);
    const initialStatus = { isPending: false, hasError: false, message: '' };
    const [requestStatus, setRequestStatus] = useState<RequestStatus>(initialStatus);

    useEffect(() => {

        async function fetchMyAPI() {
            try {
                setRequestStatus({ isPending: true, hasError: false, message: 'calling api' });
                const response: ApiResponse | null = await api.makeRequest({ method: 'GET', path: url });
                if (response) {
                    setData(plainToClass(type, response.data as T));
                    setRequestStatus({ ...response.status, isPending: false });
                } else {
                    setRequestStatus({ isPending: false, hasError: false, message: '' });
                }
            } catch (error) {
                setRequestStatus({ isPending: false, hasError: true, message: 'Could not complete request' });
            }
        }

        fetchMyAPI();

    }, []);

    return [data, requestStatus, setData];
}

