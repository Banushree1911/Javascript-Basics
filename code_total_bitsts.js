function Geek(num) {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}
console.log(Geek(11));
console.log(Geek(7));
