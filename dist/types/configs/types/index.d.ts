export type APP_NAME = 'home' | 'sales' | 'call' | 'marketing' | 'club' | 'sandbox' | 'bi' | 'team' | 'storybook' | 'desk' | 'form' | 'task' | 'rayan';
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
export type ClientError = Error | InternalRequestError | null;
type Params<Key extends string = string> = {
    readonly [key in Key]: string;
};
/**
 * @ignore
 */
export type QueryParamDefault = Record<string, string | Array<string | Array<any> | Record<string, any> | null> | Record<string, any> | null | undefined>;
export interface Options<Q extends QueryParamDefault> {
    query?: Q;
    title?: string;
}
export interface Route<Parts extends string, QueryParams extends QueryParamDefault> {
    title?: string;
    template(): string;
    create: CreateFun<Parts, QueryParams>;
    route: <Parts1 extends string, QueryParams1 extends QueryParamDefault>(arg: Parts1 | Parts1[], option?: Options<QueryParams1>) => Route<Parts1 | Parts, QueryParams & QueryParams1>;
    useQueryParams(): Partial<QueryParameterAssignString<QueryParams>>;
    useParams(): Required<Params<PathParam<Parts>>>;
    /**
     * This is useFull for where you have a dynamic param
     * @param createParams the params which will fill from current route
     */
    useCreate<T1 extends PathParam<Parts>>(createParams: T1[]): CreateFun<Exclude<Parts, `:${T1}`>, QueryParams>;
    /**
     * This is useful for create breadcrumbs
     */
    useMap(): {
        path: string | string[];
        title?: string;
        create(): string;
    }[];
    createNestedRoutes: <C>(generator: (parent: Route<Parts, QueryParams>) => C) => {
        root: Route<Parts, QueryParams>;
    } & C;
}
type QueryParameterAssignString<T> = {
    [P in keyof T]: T[P] | string;
};
/**
 * @ignore
 */
export type PathParam<T extends string> = T extends `:${infer A}` ? A : never;
/**
 * @ignore
 */
export type PathPart<T extends string> = string | PathParam<T>;
/**
 * @ignore
 */
export type CreateFun<Parts extends string, QueryParams extends QueryParamDefault> = Parts extends `:${any}` ? (params: Record<PathParam<Parts>, string> & {
    query?: Partial<QueryParameterAssignString<QueryParams>>;
}) => string : (params?: {
    query?: Partial<QueryParameterAssignString<QueryParams>>;
}) => string;
export declare enum LogoIconNameType {
    User = "User",
    SecurityGroup = "SecurityGroup",
    Department = "Department",
    Office = "Office",
    Position = "Position",
    SecurityCustomer = "SecurityCustomer",
    SecurityAgent = "SecurityAgent",
    SecurityOperator = "SecurityOperator"
}
export {};
