export function greet(name) {
  if (name === "Martin" || name === "Ernst" || name === "Marc") {
    return "Hello coach!";
  }
  return `Hello ${name ?? "stranger"}!`;
}
