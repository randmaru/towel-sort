// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (!matrix) return [];

	const array = [];

	matrix.forEach((elem, i) => {
		i % 2 != 0
			? elem.reverse().forEach((item) => array.push(item))
			: elem.forEach((item) => array.push(item));
	});

	return array;
};
