/**
 * Abstract class representing a generic iterable entry structure with key-value pairs.
 *
 * @template K The type of keys maintained by this structure.
 * @template V The type of values stored in this structure.
 */
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

/**
 * Represents an abstract base class for iterable container-like structures.
 *
 * @template T The type of elements contained in the iterable structure.
 */
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