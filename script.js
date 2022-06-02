var chocolate = Number(
  prompt(
    "How many pieces of chocolate would you like? Please enter a number from 0 - 10"
  )
);

var leftOverChoc = 10 - chocolate;

if (leftOverChoc === 10) {
  alert("What's wrong, don't like chocolate?");
} else if (leftOverChoc >= 6) {
  alert(
    `There are ${leftOverChoc} pieces of chocoloate left. Have some more!
  `
  );
} else if (leftOverChoc >= 1) {
  alert(`There's only ${leftOverChoc} left. Grab it before it's gone!`);
} else {
  alert("You ate all the chocolate. Gotta restock!");
}
