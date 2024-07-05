function calculate(a, b, callback) {
    const res = a + b;
    callback(res)
}

calculate(1, 2, function (res) {
    console.log(`Result is ${res}`);
});