//condition : expr1: expr2;

function isUserValid(bool) {
  return bool;
}
var answer = isUserValid(true) ? "you may enter" : "Access Denied";
//if isUserValid(true) = you may enter
//if isUserValid(false)= Access Denied

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "backward":
      whatHappens = "you arrived home";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}
