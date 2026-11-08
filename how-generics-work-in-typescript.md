# Title: Generics in Typescript

**Introduction:** Generic lets us create type definitions with a type placeholder <T>. Its a special type that help us work with different types of input with strict type safety. Then while using the type, we simply pass the type in the placeholder. If the inserted type and data differs, Typescript shows warning in the code editor before executing it.

Suppose we want to swap positions of 2 values. To do these without generic we need to make different functions with same functionality just for type checks.

```ts
function swapNumber(a: number, b: number): [number, number] {
  return [b, a];
} // only works with number

function swapString(a: string, b: string): [string, string] {
  return [b, a];
} // only works with string


function swapValue<T, K>(a: T, b: K): [K, T] {
  return [b, a];
} // works with number and string combination
const result5 = swapValue("b", 1); 
const result6 = swapValue<string, number>("b", 1);
```

Another useful case of generics are in asynchronous Promise. When we fetch data from external source, typescript has no idea what the type of the response or data it. So it is defaulted to `any` type and if we pass use a response type in a function that has try-catch then it will also show another warning of not using `undefined` for response types.  
The `fetchUser` function below have a return type `any`.
```ts
const fetchUser = async () => {
  try {
    const res = await fetch("api/users/1");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
```

We can use generic to provide an response type to the fetch function
```ts
type UserResponse = User | undefined;

const fetchUser = async (): Promise<UserResponse> => {
  try {
    const res = await fetch("api/users/1");
    const data = (await res.json()) as User; // Replaces any with the User type
    return data;
  } catch (error) {
    console.error(error);
  }
};
```
By doing that the `fetchUser` has a return type of `UserResponse` and the returned data from the try block has `User` type.

**Conclusion**: So generics helps us make reusable code components that helps us to use same structure for different uses. It also helps us to define the shape or type of the response data.