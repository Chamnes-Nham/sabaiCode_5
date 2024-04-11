function filterProps(obj, ...propsToFilter) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => !propsToFilter.includes(key))
    );
  }
  
  const object = { a: 1, b: 2, c: 3, d: 4 };
  console.log(filterProps(object, "b", "d")); // Output: { a: 1, c: 3 }
  