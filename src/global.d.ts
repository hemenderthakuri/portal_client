
type Json =
    | string
    | number
    | boolean
    | null
    | { [property: string]: Json }
    | Json[];

interface NormalizedCollection<T> {
    [s: number]: T
}

interface RequestStatus {
    isPending: boolean,
    hasError: boolean,
    message: string
}