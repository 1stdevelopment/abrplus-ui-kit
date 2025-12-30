export type Platform =
  | 'home'
  | 'sales'
  | 'call'
  | 'marketing'
  | 'club'
  | 'sandbox'
  | 'bi'
  | 'team'
  | 'storybook'
  | 'desk'
  | 'form'
  | 'task'
  | 'rayan';

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
export class InternalRequestError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public response?: AxiosResponse,
  ) {
    super(message);
  }
  isApiException = true;
  static isRequestError(error: any): error is InternalRequestError {
    return error.isApiException;
  }
}
