// # == ContraBand ContraBand ContraBand ==
// # Write a program that prints the numbers from 1 to 100.
// # But for multiples of 3 print "Contra" instead of the number
// # And for the multiples of 5 print "Band" instead of the number.
// # For numbers which are multiples of both 3 and 5 print "ContraBand".

// # Loop through numbers 1 to 100 (range stops at last number so you have to do 101)
// for i in range(1,101):
//     print("Delete Me")

//     # Write some smart if statements
//     # You might also want to lookup what '%' does
//     # Also how do you check if a number is divisible by another number?
let rangez = [...Array(101).keys()];
let rangezz = rangez.shift();

for (const num of rangez) {
  if (num % 5 == 0 && num % 3 == 0) {
    console.log("ContraBand");
  } else if (num % 5 == 0) {
    console.log("Band");
  } else if (num % 3 == 0) {
    console.log("Contra");
  } else {
    console.log(num);
  }
}
