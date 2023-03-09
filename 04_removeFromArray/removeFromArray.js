const removeFromArray = (arr, ...args) => arr.filter(element => !args.includes(element));

module.exports = removeFromArray;