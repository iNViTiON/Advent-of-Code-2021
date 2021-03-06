namespace day18 {
  const inputs = {
    ex: `[[[[4,3],4],4],[7,[[8,4],9]]]
[1,1]`,
    ex1: `[1,1]
[2,2]
[3,3]
[4,4]`,
    ex2: `[1,1]
[2,2]
[3,3]
[4,4]
[5,5]`,
    ex3: `[1,1]
[2,2]
[3,3]
[4,4]
[5,5]
[6,6]`,
    ex4: `[[[0,[4,5]],[0,0]],[[[4,5],[2,6]],[9,5]]]
[7,[[[3,7],[4,3]],[[6,3],[8,8]]]]
[[2,[[0,8],[3,4]]],[[[6,7],1],[7,[1,6]]]]
[[[[2,4],7],[6,[0,5]]],[[[6,8],[2,8]],[[2,1],[4,5]]]]
[7,[5,[[3,8],[1,4]]]]
[[2,[2,2]],[8,[8,1]]]
[2,9]
[1,[[[9,3],9],[[9,0],[0,7]]]]
[[[5,[7,4]],7],1]
[[[[4,2],2],6],[8,7]]`,
    ex5: `[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]
[[[5,[2,8]],4],[5,[[9,9],0]]]
[6,[[[6,2],[5,6]],[[7,6],[4,7]]]]
[[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]
[[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]
[[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]
[[[[5,4],[7,7]],8],[[8,3],8]]
[[9,3],[[9,9],[6,[4,9]]]]
[[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]
[[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]`,
    in: `[[[[4,6],4],[1,7]],[[[1,6],[8,4]],[1,1]]]
[[[[8,5],[9,2]],1],[[2,5],[[9,4],[5,9]]]]
[[[[7,3],0],[8,9]],6]
[[6,[[7,2],[6,2]]],[[[9,8],9],[9,6]]]
[2,[[[9,2],6],[[5,3],[6,7]]]]
[[[5,[9,6]],0],[[[2,8],[7,0]],[7,[4,4]]]]
[[[[5,0],2],[0,1]],4]
[2,[8,8]]
[[[[2,5],[6,8]],[[9,8],4]],[[[2,3],[5,8]],[9,5]]]
[[[[0,7],[9,4]],[[1,0],9]],[[[8,8],[7,2]],[3,[6,5]]]]
[[[[3,2],8],1],[[4,[3,4]],[[6,5],[0,6]]]]
[[[7,8],8],[0,[5,2]]]
[[3,[3,3]],[[[6,9],[1,1]],[6,[2,9]]]]
[[[[9,7],[6,8]],4],[[[8,2],[2,9]],[8,[6,2]]]]
[[[[7,3],2],[9,6]],[[[1,7],[0,0]],[4,9]]]
[[8,[7,[1,0]]],7]
[[[7,[5,1]],0],[[8,[5,3]],4]]
[1,[[[2,6],2],[1,[6,0]]]]
[[[5,8],[[9,1],1]],[[3,[5,0]],5]]
[[[[1,5],[4,9]],8],[[7,0],6]]
[9,[[0,[1,0]],6]]
[[[[6,8],6],9],[[7,3],2]]
[[9,[[8,7],4]],[[[4,0],[9,0]],[8,1]]]
[[[2,[4,4]],[7,[0,1]]],[8,[[8,6],[4,0]]]]
[0,9]
[[[[1,8],[7,4]],[[5,0],[6,1]]],[5,7]]
[[[[8,2],[9,2]],[8,[8,4]]],[0,4]]
[[[[0,7],[5,8]],3],6]
[[[7,[3,4]],[3,[1,5]]],2]
[[[1,[4,2]],5],[[1,2],1]]
[[[[8,2],[0,9]],1],[[[9,0],[3,5]],[8,[8,0]]]]
[[[0,5],[1,[3,3]]],[[[1,0],[5,2]],[7,5]]]
[[[4,[7,3]],[0,9]],[[2,0],8]]
[[[[2,2],8],[7,1]],5]
[[1,[[3,8],7]],[[7,[5,8]],[4,[1,7]]]]
[[[[2,7],4],[8,[9,1]]],[[5,2],[4,3]]]
[[2,[7,2]],[[8,[0,8]],[0,[4,2]]]]
[[6,[6,[7,4]]],[[7,[2,0]],[[8,2],8]]]
[[[7,[1,7]],[[4,1],4]],[1,[4,6]]]
[1,[[1,0],[[0,3],[6,9]]]]
[[[[8,6],0],[[2,8],[3,0]]],[[[8,2],7],[[3,0],5]]]
[[[[2,8],4],[2,[0,7]]],[[3,[1,2]],[[8,0],[4,2]]]]
[1,8]
[[5,6],6]
[[[[1,0],[3,6]],[[4,0],1]],[0,7]]
[[[5,[9,6]],[7,[1,2]]],2]
[[[6,4],[[5,6],[1,8]]],[[[9,0],[7,7]],[[5,8],[6,8]]]]
[8,5]
[5,[[[6,8],8],0]]
[[[[5,7],[0,0]],[6,[0,0]]],[[[5,5],3],[[1,1],[3,4]]]]
[[[4,0],[[8,6],2]],[[3,[3,1]],[[2,8],[7,2]]]]
[[[8,7],[[5,5],[5,3]]],4]
[[[[5,4],1],[3,4]],[3,5]]
[[[6,5],[[6,3],6]],4]
[[[[2,2],[7,1]],[6,6]],[[8,[8,7]],[[1,6],[3,0]]]]
[[4,[[5,0],[7,4]]],[3,1]]
[[[3,[5,8]],5],[1,[[9,6],3]]]
[[0,[[3,0],[8,7]]],[[1,3],3]]
[5,[[3,[3,3]],[3,6]]]
[[[[7,3],8],3],[2,[[9,8],2]]]
[[[2,4],[[1,2],5]],[[[1,2],[6,0]],3]]
[[9,[[1,1],[1,7]]],[1,[2,[9,1]]]]
[[[5,[0,0]],5],[6,[0,1]]]
[[3,[[6,5],7]],[[7,8],3]]
[[5,[2,6]],8]
[[6,[0,[3,0]]],[1,2]]
[3,[[[3,7],2],[[4,0],6]]]
[[[8,[2,7]],[4,1]],[[2,[4,2]],3]]
[[3,2],[[[8,8],[8,6]],[[5,3],1]]]
[1,[2,[[3,2],[2,9]]]]
[8,[[9,1],[[8,4],[9,9]]]]
[[[4,[4,6]],[1,8]],[[7,7],[[7,4],3]]]
[[[8,2],[[9,7],[0,8]]],[[4,4],[[6,1],5]]]
[[[3,[6,6]],[[8,6],[3,7]]],[[7,9],[[5,3],8]]]
[[[8,9],[8,6]],[[[3,3],[2,9]],[[6,6],9]]]
[8,[[[3,0],5],2]]
[[[[1,3],1],[[1,9],4]],[7,[3,1]]]
[[[[9,3],3],[[6,8],7]],[[[2,0],3],[8,[3,6]]]]
[[[[7,1],[8,1]],[[4,6],[5,9]]],[[[4,5],3],5]]
[6,[[3,[0,0]],[6,6]]]
[[[[8,8],[7,6]],3],[[[7,7],[1,1]],[[1,8],[1,4]]]]
[[9,[8,[3,4]]],[[6,2],[1,5]]]
[[5,[3,3]],[5,[0,5]]]
[[[[8,9],5],[1,9]],[[5,[2,8]],[[6,4],[9,4]]]]
[2,6]
[[[[1,4],8],5],[5,[0,[1,7]]]]
[[[[1,0],[9,9]],[0,9]],[[[5,4],[1,6]],[9,[6,7]]]]
[[[7,1],5],[[3,2],5]]
[[9,[[8,8],[7,0]]],[5,[3,[1,3]]]]
[[[[5,2],[7,5]],[4,[6,7]]],[[[8,1],6],[2,[6,6]]]]
[[[5,7],[6,[8,2]]],[8,2]]
[[[[5,7],8],[[9,8],2]],[[2,8],[[7,6],3]]]
[[1,[[1,6],1]],[0,[[5,9],[9,1]]]]
[[[[1,4],[5,0]],[[5,5],[9,3]]],[[6,4],[4,[4,6]]]]
[7,[[5,[4,8]],[[5,9],2]]]
[[[[2,9],[1,8]],[4,2]],0]
[[5,[[0,9],[3,7]]],[2,[6,[4,8]]]]
[[0,[5,5]],0]
[[[5,0],[[0,5],8]],[6,[[8,7],[6,5]]]]
[[[5,[8,2]],[8,4]],[[6,2],[8,[7,0]]]]`,
  };

  const add = (x: string, y: string) => `[${x},${y}]`;

  const addToNearerst = (
    regular: RegExpMatchArray | undefined,
    part: string,
    n: number
  ) => {
    if (regular === undefined) return part;
    const num = regular[1]!;
    const [part1, part2] = [
      part.slice(0, regular.index),
      part.slice(regular.index! + num.length),
    ];
    return `${part1}${+num + n}${part2}`;
  };

  const explode = (input: string, i: number, bracketCount: number): string => {
    if (i >= input.length) return input;
    let result: string = input;
    if (input[i] === "[") ++bracketCount;
    else if (input[i] === "]") --bracketCount;
    if (bracketCount === 5) {
      let [first, second] = [input.slice(0, i + 1), input.slice(i + 1)];
      const [, leftNum, rightNum] = second.match(/(\d+),(\d+)/) ?? [];
      if (leftNum !== undefined && rightNum !== undefined) {
        second = second.replace(/(\d+),(\d+)/, "");
        const lastRegularFromFirst = Array.from(first.matchAll(/(\d+)/g)).pop();
        first = addToNearerst(lastRegularFromFirst, first, +leftNum!);
        const firstRegularFromSecond = Array.from(second.matchAll(/(\d+)/g))[0];
        second = addToNearerst(firstRegularFromSecond, second, +rightNum!);
        result = `${first}${second}`;
      }
    } else {
      result = explode(input, i + 1, bracketCount);
    }
    while (
      result !==
      (result = result
        .replace(/,,/g, ",")
        .replace(/\[\]/g, "")
        .replace(/\[,/g, "[0,")
        .replace(/\,]/g, ",0]"))
    ) {}
    return result;
  };

  const split = (input: string): string => {
    const moreThanNine = (JSON.parse(input) as [N, N])
      .flat(Number.MAX_SAFE_INTEGER)
      .find((n: number) => n > 9) as number | undefined;
    if (moreThanNine === undefined) return input;
    const half = Math.floor(moreThanNine / 2);
    return input.replace(
      moreThanNine.toString(),
      `[${half},${moreThanNine - half}]`
    );
  };

  const getMagnitude = (input: N): number => {
    if (typeof input === "number") return input;
    const [first, last] = input;
    const mFirst = 3 * getMagnitude(first);
    const mLast = 2 * getMagnitude(last);
    return mFirst + mLast;
  };

  const process = (input: string): object => {
    let [result, ...addList] = input.split("\n") as string[];
    while (addList.length > 0) {
      result = add(result!, addList.shift()!);
      while (
        result !== (result = explode(result, 0, 0)) ||
        result !== (result = split(result))
      ) {}
    }
    const magnitude = getMagnitude(JSON.parse(result!) as N);
    return { result, magnitude };
  };

  const processPart2 = (input: string): object => {
    const list = input.split("\n");
    let maxMagnitude = 0;
    for (const first of list) {
      for (const second of list.filter((s) => s !== first)) {
        let result = add(first, second);
        while (
          result !== (result = explode(result, 0, 0)) ||
          result !== (result = split(result))
        ) {}
        maxMagnitude = Math.max(
          maxMagnitude,
          getMagnitude(JSON.parse(result!) as N)
        );
      }
    }
    return { maxMagnitude };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, unknown>>(
      (acc, [key, input]) => (
        (acc[key] = { ...process(input), ...processPart2(input) }), acc
      ),
      {}
    )
  );
}

type N = [number | N, number | N] | number;
