namespace day21 {
  const inputs = {
    ex: `Player 1 starting position: 4
Player 2 starting position: 8`,
    in: `Player 1 starting position: 4
Player 2 starting position: 5`,
  };

  const diceScoreTimes = new Map([
    [3, 1],
    [4, 3],
    [5, 6],
    [6, 7],
    [7, 6],
    [8, 3],
    [9, 1],
  ]);

  const winCache = new Map<
    number,
    Map<
      number,
      Map<number, Map<number, Map<boolean, [p1win: number, p2win: number]>>>
    >
  >();

  const move = (currentPosition: number, diceScore: number) =>
    ((currentPosition + diceScore - 1) % 10) + 1;

  const deterministicDice = (p1: number, p2: number) => {
    let p1s = 0;
    let p2s = 0;
    let dice = 0;
    let isP1 = true;
    let count = 0;
    while (p1s < 1000 && p2s < 1000) {
      let diceS = ++dice;
      diceS += ++dice;
      diceS += ++dice;
      count += 3;
      if (isP1) {
        p1 = move(p1, diceS);
        p1s += p1;
      } else {
        p2 = move(p2, diceS);
        p2s += p2;
      }
      isP1 = !isP1;
    }
    return Math.min(p1s, p2s) * count;
  };

  const rollQuantumDice = (
    p1: number,
    p1s: number,
    p2: number,
    p2s: number,
    isP1 = true
  ): [p1win: number, p2win: number] => {
    if (p1s >= 21) return [1, 0];
    else if (p2s >= 21) return [0, 1];
    const cache1 = winCache.get(p1) ?? winCache.set(p1, new Map()).get(p1)!;
    const cache2 = cache1.get(p1s) ?? cache1.set(p1s, new Map()).get(p1s)!;
    const cache3 = cache2.get(p2) ?? cache2.set(p2, new Map()).get(p2)!;
    const cache4 = cache3.get(p2s) ?? cache3.set(p2s, new Map()).get(p2s)!;
    return (
      cache4.get(isP1) ??
      cache4
        .set(
          isP1,
          [3, 4, 5, 6, 7, 8, 9]
            .map((diceScore) => {
              let p1n = p1;
              let p2n = p2;
              let p1sn = p1s;
              let p2sn = p2s;
              if (isP1) {
                p1n = move(p1, diceScore);
                p1sn = p1s + p1n;
              } else {
                p2n = move(p2, diceScore);
                p2sn = p2s + p2n;
              }
              return rollQuantumDice(p1n, p1sn, p2n, p2sn, !isP1).map(
                (win) => win * diceScoreTimes.get(diceScore)!
              ) as [p1win: number, p2win: number];
            })
            .reduce<[p1win: number, p2win: number]>(
              (acc, curr) => [acc[0] + curr[0], acc[1] + curr[1]],
              [0, 0]
            )
        )
        .get(isP1)!
    );
  };

  const quantumDice = (p1: number, p2: number) => rollQuantumDice(p1, 0, p2, 0);

  const process = (input: string): object => {
    const [p1, p2] = Array.from(input.matchAll(/: (\d+)/g)).map(([, p]) => +p!);
    return {
      part1: deterministicDice(p1!, p2!),
      part2: Math.max(...quantumDice(p1!, p2!)),
    };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, unknown>>(
      (acc, [key, input]) => ((acc[key] = { ...process(input) }), acc),
      {}
    )
  );
}
