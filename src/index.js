// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    let counter = 0;
    if (matrix !== undefined) {
        matrix.forEach((element) => {
            counter % 2 === 0
                ? (result = result.concat(element))
                : (result = result.concat(element.reverse()));
            counter += 1;
        });
    }
    return result;
};
