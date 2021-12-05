const inp = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`
  .split("\n")
  .map(
    (line) =>
      line
        .split(" -> ")
        .map((position) => position.split(",").map((n) => +n)) as [
        [number, number],
        [number, number]
      ]
  )
  .filter(([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2);

console.log(JSON.stringify(inp));
