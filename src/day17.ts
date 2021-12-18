namespace day17 {
  const inputs = {
    ex: "target area: x=20..30, y=-10..-5",
    input: "target area: x=153..199, y=-114..-75",
  };

  const naturalSeriesSum = (n: number) => (Math.sqrt(8 * n + 1) - 1) / 2;
  const reverseNaturalSeriesSum = (n: number) => (n * (n + 1)) / 2;
  const inBetween = (n: number, start: number, end: number) =>
    start <= Math.max(n, end) && Math.min(n, end) <= end;

  const process = (input: string): unknown => {
    const [, x1, x2, y1, y2] = Array.from(
      input.match(/target area: x=(\d+)..(\d+), y=(-*\d+)..(-*\d+)/)!
    ).map(Number) as [unknown, number, number, number, number];
    const xSpd = Math.floor(naturalSeriesSum(Math.max(x1, x2)));
    const xTarget = reverseNaturalSeriesSum(xSpd);
    if (!inBetween(xTarget, x1, x2)) throw new Error("failed 1");
    const bottomY = Math.min(y1, y2);
    const ySpd = Math.abs(bottomY!) - 1;
    if (ySpd < xSpd) throw new Error("failed 2");
    const heighestY = reverseNaturalSeriesSum(ySpd);
    return { heighestY };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, unknown>>(
      (acc, [key, input]) => ((acc[key] = process(input)), acc),
      {}
    )
  );
}
