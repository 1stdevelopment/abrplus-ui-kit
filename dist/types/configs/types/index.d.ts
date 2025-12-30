export type Platform = 'home' | 'sales' | 'call' | 'marketing' | 'club' | 'sandbox' | 'bi' | 'team' | 'storybook' | 'desk' | 'form' | 'task' | 'rayan';
export type InputFieldError = {
    message?: string;
} | null;
export type AppDirection = 'rtl' | 'ltr';
export interface ITreeOption {
    label: string;
    value: string;
    children?: ITreeOption[];
    hasChildren: boolean;
    checkable?: boolean;
    [prop: string]: any;
}
export type ErrorLike = {
    message?: string;
};
export interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: unknown;
    request?: unknown;
}
export declare class InternalRequestError extends Error {
    message: string;
    status?: number | undefined;
    response?: AxiosResponse | undefined;
    constructor(message: string, status?: number | undefined, response?: AxiosResponse | undefined);
    isApiException: boolean;
    static isRequestError(error: any): error is InternalRequestError;
}
