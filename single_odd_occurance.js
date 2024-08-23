let n = [5, 4, 6, 8, 3];
let result = 0;
for (let num of n) {
    result ^= num;
}
console.log("element that occurs only once:", result);
