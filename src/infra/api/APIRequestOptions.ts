export interface APIRequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    path: string,
    data?: any,
    delay?: number
}