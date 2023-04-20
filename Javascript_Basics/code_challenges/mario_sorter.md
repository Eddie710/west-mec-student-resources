# Problem: Mario Character Sorter

> You are a game developer working on the next Mario game, and you need to sort a list of characters by their attributes to determine their roles in the game. Your task is to write a function that takes an array of Mario characters and sorts them based on their attributes.

> The array of Mario characters should be in the following format:

```js
const marioCharacters = [
  { name: "Mario", speed: 3, power: 5, jump: 4 },
  { name: "Luigi", speed: 4, power: 4, jump: 5 },
  { name: "Toad", speed: 5, power: 2, jump: 2 },
  { name: "Bowser", speed: 2, power: 5, jump: 3 },
  { name: "Peach", speed: 3, power: 1, jump: 1 },
];
```

> Your function should sort the characters in the following order:

> Characters with the highest power should come first
> Characters with the same power should be sorted by their speed, with the highest speed coming first.

> Characters with the same power and speed should be sorted by their jump, with the highest jump coming first.

> Your function should return an array of the sorted Mario characters in the same format as the input array.

> You should use at least three array manipulation methods to accomplish this task, such as `sort()`, `filter()`, `map()`, or `reduce()`. You have
> 30 minutes to work on this problem.

## Example Usage

```js
const marioCharacters = [
  { name: "Mario", speed: 3, power: 5, jump: 4 },
  { name: "Luigi", speed: 4, power: 4, jump: 5 },
  { name: "Toad", speed: 5, power: 2, jump: 2 },
  { name: "Bowser", speed: 2, power: 5, jump: 3 },
  { name: "Peach", speed: 3, power: 1, jump: 1 },
];

const sortedCharacters = sortMarioCharacters(marioCharacters);

console.log(sortedCharacters);
// Output:
// [
//   { name: 'Mario', speed: 3, power: 5, jump: 4 },
//   { name: 'Bowser', speed: 2, power: 5, jump: 3 },
//   { name: 'Luigi', speed: 4, power: 4, jump: 5 },
//   { name: 'Toad', speed: 5, power: 2, jump: 2 },
//   { name: 'Peach', speed: 3, power: 1, jump: 1 }
// ]
```
