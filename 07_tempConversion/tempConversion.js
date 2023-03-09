const ftoc = function(fah) {
  let C = (fah - 32) / 1.8;
  let rounds = C.toFixed(1);
  return parseFloat(rounds);
};

const ctof = function(cel) {
  let F = (cel * 9/5) + 32;
  let rounds = F.toFixed(1);
  return parseFloat((rounds));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
