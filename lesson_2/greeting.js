let name = prompt("What is your name?");

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  greeting = `Hello ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;
} else {
  greeting = `Hello ${name}.`;
}
console.log(greeting);
