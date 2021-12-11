namespace day11_1 {
  const inp: number[][] = `7313511551
3724855867
2374331571
4438213437
6511566287
6727245532
3736868662
2348138263
2417483121
8812617112`
    .split("\n")
    .map((line) => line.split("").map(Number));

  const neighbours: [number, number][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const grid = inp
    .map((line) =>
      line.map((energy) => ({
        energy,
        neighbours: [] as Point[],
      }))
    )
    .flatMap((line, y, arr) =>
      line.map(
        (point, x) => (
          (point.neighbours = neighbours
            .map(([dx, dy]) => arr[y + dy]?.[x + dx])
            .filter((p): p is Point => p !== undefined)),
          point
        )
      )
    );

  let flash = 0;

  for (let i = 0; i < 100; ++i) {
    let enoughEnergy = false;
    for (const point of grid) {
      ++point.energy > 9 && (enoughEnergy = true);
    }
    while (enoughEnergy) {
      enoughEnergy = false;
      for (const point of grid.filter(
        (point) => point.energy > 9 && point.energy < 200
      )) {
        point.energy = 200;
        ++flash;
        for (const neighbour of point.neighbours) {
          ++neighbour.energy > 9 && (enoughEnergy = true);
        }
      }
    }
    for (const point of grid.filter((point) => point.energy >= 200)) {
      point.energy = 0;
    }
  }

  console.log(flash);
}

interface Point {
  energy: number;
  neighbours: Point[];
}
