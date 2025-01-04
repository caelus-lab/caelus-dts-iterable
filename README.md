# @caelus-dts/iterable

This library provides abstract base classes for creating iterable data structures in JavaScript/TypeScript.  It offers a foundation for building custom collections that seamlessly integrate with JavaScript's iteration protocols.

# Installation
- using `npm`
```shell
npm install @caelus-dts/iterable
```
- using `yarn`
```shell
yarn add @caelus-dts/iterable
```
- using `pnpm`
```shell
pnpm add @caelus-dts/iterable
```

## Usage
Extend the abstract classes to create your specific iterable data structures.  You need to implement the `size`, `isEmpty`, and `iterator` methods in your derived classes.

```typescript
import { IterableEntry } from '@caelus-dts/iterable';

class MyCustomMap<K, V> extends IterableEntry<K, V> {
  // Your implementation of size, isEmpty, and iterator
  // ...
}


import { IterableElement } from '@caelus-dts/iterable';

class MyCustomList<T> extends IterableElement<T> {
    // Your implementation of size, isEmpty, and iterator
    // ...
}



// Example instantiation and usage
const myMap = new MyCustomMap<string, number>();
// Add some key-value pairs to myMap

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});


const myList = new MyCustomList<number>();

for(const item of myList) {
    console.log(`Item: ${item}`);
}

myList.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

```


## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
[MIT License](LICENSE)
