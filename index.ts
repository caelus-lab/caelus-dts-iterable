export abstract class IterableEntry<K, V> {
    public abstract get size(): number;

    public abstract get isEmpty(): boolean;

    protected abstract get iterator(): IterableIterator<[K, V]>;

    public abstract toArray(): [K, V][];

    public abstract clear(): void;

    public forEach(func: (value: V, key: K, index: number, container: this) => void) {
        let index = 0;
        for (const [key, value] of this) {
            func(value, key, index++, this);
        }
    }

    public [Symbol.iterator]() {
        return this.iterator;
    }
}

export abstract class IterableElement<T> {
    public abstract get size(): number;

    public abstract get isEmpty(): boolean;

    protected abstract get iterator(): IterableIterator<T>;

    public abstract toArray(): T[];

    public abstract clear(): void;

    public forEach(func: (value: T, index: number, container: this) => void) {
        let index = 0;
        for (const item of this) {
            func(item, index++, this);
        }
    }

    public [Symbol.iterator]() {
        return this.iterator;
    }
}