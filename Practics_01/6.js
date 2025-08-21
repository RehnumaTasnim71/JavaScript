var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longestName = friends.reduce((a, b) => a.length > b.length ? a : b);
console.log("Large:", longestName);
