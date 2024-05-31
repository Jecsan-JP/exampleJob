export interface Mapper<T, R> {
    map(t: T): R;
}