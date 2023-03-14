function createStack() {
  let items = [];
  return {
    items: items,
    push(item) {
      items.push(item);
    },
    pop() {
      items.pop();
    },
  };
}

const stack = createStack();
stack.push(34);
console.log(stack.items);
