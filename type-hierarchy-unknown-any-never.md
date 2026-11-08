# Title: Typescript Hierarchy

**Introduction:** The types in typescript can be viewed as a tree where all the other types are branched from the top type of any and unknown.


`unknown` and `any` both are the top types, All the types are branches of these two. We can use `unknown` and `any` in every places for type definitions. These two types are used where we don't know what the actual type of the data will be at runtime. 

`never` represents the value or scenarios that never happen. For example codes written under a logic that always executes and return value from a codeblock are never executed or a function that always throws errors have `never` type. In programming we almost never use this `never` type. 

**The reason behind preferring `unknown` over `any`:** `any` type disables all the type checking. This causes errors and crashes while calling methods, accessing values from data on the runtime because those values, methods might not exists on those data. 
`unknown` doesn't behave exactly same as `any`. It also accepts any value but typescript forces us to do type checking or type narrowing using `typeof`, `instance of` before calling methods or accessing values. This prevents errors and crashes at runtime.

```ts
let value: any = "hello world";
value.toUpperCase(); // executes correctly
value.toFixed(); // crashes at runtime, because the value is string

let value2: unknown = "hello world";

// Typescript show warning "'value2' is of type 'unknown'."
value2.toUpperCase(); 
value2.toFixed(); 

// To avoid the warning, we can do type narrowing. 
if (typeof value2 === "string") {
    value2.toUpperCase();
}

if (typeof value2 === "number") {
    value2.toFixed();
}

```

**Conclusion**: Type hierarchy should be used as per the rules to avoid errors and crashes. We should try to avoid using `never` type. And for the `unknown` and `any` type, its best to use `unknown` as it is safer than using `any` 