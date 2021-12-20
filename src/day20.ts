namespace day20 {
  const inputs = {
    ex: `..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#

#..#.
#....
##..#
..#..
..###`,
    in: `#..##.##.##..#.#.####.##..#..###.#..####.#.#....##....#....#...##.#.#.##...#.##.#...#.##..##.#....#...###.#.##.#..#..#..######..#....#.###..#....##.##..........#.#..###.......####..#...###.#.###...#####....##...##..##......#.#......#..#..#.#.......#.##.###.....##.#.#....##.#####.###.....#..###...###..##.##.#.#...#.##.###.###.#.....#.####..#..##....##.#.#.###...##.#.#.#...#.#####.......#..##......#..##.###.##.####.#.#..#...######...####...#.##.#...#....#.......##..#.#....###.#...#.##...#.#.......#.#....#.#..

#....#..##..##.....##..####.#....####.##......##.##.##..#..#..#....###...##.#######.####.#..#.######
.####.#....##.#...##.......#...####.#.#.###.#.#..####..###.#####.##.##..........#..##.#...#...#..###
#######..#....##...#....##...#..###.##.#.#.#.####.###..##.#....#.#####...#..#...####...#..#..#.#..##
##..##.##.##..######.#.....##..#..#.#.#..#..####......#..#......##.#.##.###.###.##.##########.#.#.#.
#..##.#.#...#..#.####.###....###..##.#.###.##..##...#..####.##.####.#####..#..#..#.#.#...#..#.#.###.
.##...###....###..#..##.#..##...#.###.#.##...#....##..#.....#.##.##......#.##..#.#....##...###.##..#
###..#.###.#..#...###.####.#.....##.#..#####.##..#.........#.##.#..#.#...#..##.#.##.#.##.#.######..#
..###..##.#.##.....#....#.#..####..#...#####.....##########..###........#.##.#.#.#...#.....##..#..#.
#.....###..#.#..#..#.##..####.#.#......##.#..####.##.#...#.#.##.#....###.#...##....#.#.##.#.##.#####
##..###..#####.#..#.#.##.#####.######.##..##..##..#..#..######.#.#.###..#..##..##.#..##..###.####.#.
####..#..#..#..#.#.#.#.#.##.#..#...##.##.#.#.###...###.#.##...###.#.#.#.##.#...###...####..##......#
.###.#......#..#..####.....#####.#.##.....#...#.#.#####.#.#..#####.##........#...#.###.#...#.#.##...
........######..####..##.#..##.#.#...#....##.#..#..#####.#######..##....#.####.########..#......#..#
##.##..#...##.#..##....##.#.........#..#.#.#######.##.#..##...#.##.###.##.#.#...#.######.##...#####.
.##.#.#####......#.##.#.#.#..#......#.#..#....####.#.#..#.#..#..##.#.#..###.##.#########..#...#.####
.###.##......###..#..##.#.##.###.##.##.#####.#.#.#.#.##....#.#.###.######.#............###.###..##.#
.########.#.#...###.##...#...##..##.##..#..#..##...##..##.....#...#.#...#..#.##..#.####..#...#..#...
#.##...#.#.##.####..##.##.......#.#.#.######.#..##.##..#.#.##..##....###..#.#.#.##.##..#.###.###....
#..#..##.##.##.#...##.#....##.#..##...#.##..#.##....###...#..###..#.######..###.#.#.#..###.##.###..#
.##..#.##.#..#.#.#.#.#..#.###.###.##.#..##.#.#..##.#.#.#...#..#.###..###.##.#.#..#####.#..##.##...#.
#..###..#.##..#.####...##..#.#.#...####...##.....#..#.#.#.......##.#..##.#..#..#.....###..#########.
##..####...#.##.#.##.#######.##...#..#.#.#.#..##.#.....###...###.#..##.#..#..##.....###...#.##.##.##
.##.#.##.#.#.#.###...###..###.######............##.###.###.#.####..##....#.##.#.#..#.######....#.#..
###.##.....##..#.###..##...##.#...#..#..#.##.#.#.##.##...##.##.#.#..#.#......#.####...###..#.#..#.##
##.#....#.###..#.#.#.##...#..#..#.######..#.#..#...#...#.#.#.#..#.##..#.#....##.....#.#.#.#.##.#.###
####....#.####.###.#...##...##.#.#..........#..##.##...###..#.##...###.#.#.#...##.##......###.##...#
...#.#..#.#.#######..#..#...#.##.##.#.....#####.##...#..##...#..##..###......#...#..###.##.##....###
#...#..#..#....###..##.....###.###.#...#..##.###..##.##.#.##.#.##......#.#...#.####..#.#..#########.
...#......#.###.#..###..####...###..#......#.##..#..#.#.#.#.....##.#...#......#.#####.###..#..#.###.
.##...###.##.###....##..#..#..#####..##.##.#.####..##.#..####.###..###.#.###.#..#####...#.####.##...
#.#.##........#..#...##.##..#..####.####.#..#..###.###.#...#..###.####.####.##.##..#.#.##.###..#.###
....#......#.####....#######.#.####..#.##...#.###.....##.##.#.#..#.##..#..#...##.#..........#...#...
##.##.#.#########.####.###.#...#....#.###.###.#..###.#...###.#...###.###..##.##...#.#..#.#######..#.
##.......#.##.##.###.#.####.#..#.#......##.###.###.###.........######...#.#####.#...##.#..#.#.##..##
#.#..###..#..#..#..#..#..#.#..#......###...#####...#.#.#.#####..#.......#....###.#.#...##..##..##.##
##.....##....##.#####..#####.#..#...#.#..####...#.###..#####..##..##......#........##.#..##...##..#.
###..#..#...#....##.###..##.##.#.#.####.#.####.##...#.....######.#....#.#.#.......###.....######.###
#.#.##..###..###..#.#.##.#.#.##..#..#..#.#.######.#.#.#...#.#.#.##.#.#....#....###.#.#...###...#.##.
....#..#.#..###.##.##.#####..###...##.#####...#.....#.##.##.###.##.#.##....##.#.#.######.##.###..##.
.###.#..##..##.###.#.#.#....###..#.##..##...#.#####.#.#..##....##....####.#..####..##.#....##..#.###
#.#..##...#...##...####..####..###..##.#.#.##..###..#.####..###.#.#...#...#....##...##..#...###.#..#
#...#.##..##.####..#..#.....#.##.#####.##.......###.#...###.#..#..#....##.#...####..#...###...#.###.
#..###..####.#.#.####...##.#......#.####.##.#..##...#.##...##.##...###..#..##.#..#...###.#..###.#.#.
.###..#.##.##.#.#...#.#.#.#.###.#.#...#.##..#....###.#.#.###...#....##.#.####.##.#.###.#..#.##..##..
..###.#.###..##....#....##.#...##.##.###...#..#.###..##..###.#..##.##.#.#.##.#.##.##..##.#..#####..#
.##.#......###.##.##.###......####..##.###...##...##....###.#####.##.#.#.#.#####.#..#..#####.##.###.
##.#..#.#....#.#.#..###..##.#..#.###....#...#.#.....###.##.#...##.####.##...###....####..#....######
##.#..##.#.#####.#..###..#.....##...##.###.##.#.....#...###..#.###.#..#....#.#...##.#.###.#....#.#.#
.........##...##...#.##.....#.##.###..#.###.#.###...##.##.#.#.....#......######.#.....###..#####.#..
.####.##...#.###.###.##...##.#...#...##.#...#...####....##.#####..####.#....#..##...#.#....#####...#
.###..######..#...##..#..#..##.##.#...##.##.#..##.#..#.#...#.#######.###.####.#..##.##.#..#..#.#...#
.###.#....##.##.#...##..#.#.##..##.###.#..#.#..####.#..#.##.##.###########.#.#...##.#.##...#..#...#.
..#.##.#.#.#.#####..###.#.#####.#.####.#.#....#..#####..##.######.....###.#.#.#...#..##...#.#..###.#
..##....#...#.####.##..####.##..###.....#...#..#....##.#.#..#....#.###.##.##...#.#.##....###.#####.#
##.##...#.##...#.###.########..##....####.#...#.#...#..##...##......#.........#.#.#.####.#...#.##..#
####...###.#########..#.##...#.#.####..##.#.###....###..#...#.#..#.#.##...#####.#......#..#..##.#.##
#...#.####.##....#.###..#.###.#...#..###.#..####...#..##..#....##......##..####.####.#..##....#.#..#
.##...###.#..#.#.##..#..##...#...#....##..###...##.###.#####.#.####.###.##.#.#.##.####.#...##.##.##.
####.##.####...#..#......#.#..##.#.##.##.#####.#.#.##.##.#..###.##.###...#.####.#..#..#..#.###.#####
#.#.###.#.#.#..#...#..#..#...##..##..######.#...#..####...#.#.###..####.#.#..##.##...##...####..#.#.
###.#..##.###..#.#.##.#...#.#..#....#..#....#.####.#.######..####.##.#.###.....#.....######..###.##.
.###.#.#...#####.##.#..##.##.#.#....##..###.#.##...##.#.....#.#.#####.##.####....##.#####.######...#
.##.###...#####.#.###.#.#.###..##.#..##.#.#..#.##.##..#....#..###.#.####.#..##.#...#.........#.#####
#..##..#.#.#...###....##..##....#...#.#.##.#...#..###..##.#...#.#....##..#.#.#....###...#.##...###.#
###......#..##...######.#.##.#.#..#.#..#...###.#.#####....##.###..##.#.###.###...##..##.....##..##.#
.###..###.#....#..#.###.###....###.#....##.#.##.##...#####.#..#######..##.##....#...##.#.###..##.#..
###.##.##..#...#.#.#..#..#.#####.#.##...###..##...#.#..#....#.#######.#####.##...#..#.####...###.###
.#.#.#.#.##....###..##..######.##.###.##.#.....#.#.##.##.#.##......#.#........#..##.#..#..########..
.##.#.##.#....#......##.##.#.#..#..######.#.###.#....#.#.#..#.....#.#.#######..####.#..######..#.###
.#....#....#.#.#..#.###........##...########.#.####.##.#..#..#.####....#..#.#.#...#####.##.#.#..#..#
####.##.###...###.....#..##.#.##.#....#....###.###.###.##......####.######.#.#.###.#.#.###...###.##.
..##.#######..#.#....#.#..##.........##..#..##.#.#........#..##...#.#####.......##.....##.#...##...#
#.#..#.#.#..###..#..#..##.#..##.##.###.##.#..##..######.#..####.#...#.###...#..#.#.#...#..###.#..##.
.###.#.##..#.#.##...###.#####.##.###..###..#...###.#.##....##.#...##.#.###.##.....#.#####.#####.#.##
...##..##.#.#.#.#.#.##.#.##.#..##.#.##..##..##.###.##.#........##.#.###.####.####....###.#.##.#.#.#.
.##.##...#........####.#.#..###....#.#.##.#.##.......##..#.####...##..####.....#.####.....#######..#
#.#.##...#.#..#.##..#.####..#.#....######..........#.##..##..#..#######.##.#.#...###.....##......##.
###.###..####.#.#..####...#..#..###.###.####....#..##..#..#...#######..#...#.##.##...#.####..#.#....
####.##.###.#..##...##.##.##.##....##.#.#.#.###.###.#.#..##.#.#####.#....#.###.#......##.#.##..#..##
.##.##.#..#.#.......##...###.#.##.#.##...##.##...##.#..#.##...###.####..#....###..#.....##...###..##
#....##..#.###..##..#.###.##.###.#..#######....##.#.#.#.#..###.##.......####....#..#..##..#.#..#....
.######...#...#.#.##.#..#......#.#.##.#.#...###.#...###...#..###.#.....#...#...#....#.......##....##
#.#.###...#.####..##..##.##...###.#######..#..###...#..#.#.#..#..##.....#.#.####.#.#.######..###.###
.####.....#.#.######.#..###...#.#...##...##.#..##.#.#.#......###...#.#..#..#.###..#...########..#...
#..#.#.#..#.#....####..#.##..#..##.#..#.#..####.#####.##.######....#..#.##.#..#..#...#..#.....#.####
....#.#.#....###...###..##....#####..##.#....##.###....#.#.#####..###..#.#..#####.#....##.#..##.#.#.
#...##.#..#.###.#...##...#.#..#.#.####.####..###.####.....#.....##..###.#..#.#..###....#.###..###..#
......##....##...#....###.#..##....#.#...#######..##.###..##...#.###..####.##.#.###...####..#.#.....
#..#####.###...##.##..#..#....###...#..##...#...#.######...#.#######..##.#..####...###.#..##..####.#
..#.##.##.#..##......###.#.##.##.###.#####..##.#.##....##..###....#..#..###..####.#......#.#.###.#.#
###.#....#..######..#...#.##.##..###....#...##.#...##########..#.####.#.#..#..###.#.#.#.##....#.#.#.
###.###....#....#...##.##..#.#.###.##..##....##.#.####.##.#.####..#..###.#...###.#.#.##.#.##...##..#
#....####..###.###..##.#.##.#....#.###...#.###.#..####....######.####.##.#.#.#.####.#.#...#.#.#.####
.#.#.....##.#..#####.###.##..#..#.##..#.##..##.#.#..###...##..###.#.##.#.##..#..####..###.#..##.#.#.
.##..##.#...#..##.#.####.####....#.#.###.###.##.#####.##....#.#.#...#.#..##..####..#.#...#.##...###.
#....##.#.#..#.#....#...##..#..####.##.#.##.....#.###..#.##.##..###.#..##..###.##.....##..#..#.#....
.##.####..#.#..#.#.#.##...#.#.##........#..#..###.#..#.#..#..###...####.######......##..##.#####.##.
####......##.######...##.#.#...######.#..###.#..#.######.#.#######..##.....##.#.###...#..##.##..####
...###.....#.##..##.#.....###.###.####..##..###..#..##.#.#......##..#.#.#..##.##.####.##.#.####.#.##
.....#..#####.#.###..###..#.##....##.#..##.#.#.##...###....##.####.##..####....#...#..#.######..###.`,
  };

  const enhance = (img: string[][], enhancer: string[], fill: string) =>
    Array.from({ length: img.length + 2 }).map((_, y) =>
      Array.from({ length: img[0]!.length + 2 }).map(
        (_, x) =>
          enhancer[
            parseInt(
              [2, 1, 0]
                .flatMap((yi) =>
                  [2, 1, 0].map((xi) => img[y - yi]?.[x - xi] ?? fill)
                )
                .join(""),
              2
            )
          ]!
      )
    );

  const symbolToNum = (c: string) => (c === "#" ? "1" : "0");
  const lits = (img: string[][]) => img.flat().filter((p) => p === "1").length;

  const process = (input: string): object => {
    const [enhcRaw, imgRaw] = input.split("\n\n");
    const enhancer = Array.prototype.map.call(enhcRaw, symbolToNum) as string[];
    const img = imgRaw!
      .split("\n")
      .map((row) => row.split("").map(symbolToNum));
    let imgOutput: string[][] = img;
    for (let i = 0; i < 2; ++i)
      imgOutput = enhance(imgOutput, enhancer, i % 2 ? enhancer[0]! : "0");
    const litCount2 = lits(imgOutput);
    for (let i = 2; i < 50; ++i)
      imgOutput = enhance(imgOutput, enhancer, i % 2 ? enhancer[0]! : "0");
    const litCount50 = lits(imgOutput);
    return { litCount2, litCount50 };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, unknown>>(
      (acc, [key, input]) => ((acc[key] = { ...process(input) }), acc),
      {}
    )
  );
}
