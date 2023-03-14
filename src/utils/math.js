const randomize = (start, end, dotIndex) => {

    if (start < 0 || end < 0) {
        return 'Отрицательное число!';
    }

    if (end < start) {
        [start, end] = [end, start];
    }

    let result = Math.random() * (end - start) + start;
    result = result.toFixed(dotIndex);
    return Number(result);
};

Array.prototype.randomElement = function() {
    return this[randomize(0, this.length - 1)];
}

export {randomize};
