type BatchFunction = (...props: any[]) => React.ReactNode;
type BatchRecord = {
    [K in string]: BatchRecord | BatchFunction;
};
type BatchResult<T extends BatchRecord> = {
    readonly [K in Capitalize<keyof T & string>]: T[K];
};
declare function batch<T extends BatchRecord>(components: T): BatchResult<T>;
export { batch };
