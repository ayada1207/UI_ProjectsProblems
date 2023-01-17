console.log(1);

setTimeout(() => console.log(2)); //settimeout fn  stored in Macrotask queue 

Promise.resolve().then(() => console.log(3)); // promises stored in Microtask
// microtask queue has high priority to excute than macrotask

Promise.resolve().then(() => setTimeout(() => console.log(4))); // Microtask queue

Promise.resolve().then(() => console.log(5)); // 

setTimeout(() => console.log(6))

console.log(7);


// output : 1 7 3 5 2 6 