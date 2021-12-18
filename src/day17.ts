namespace day17 {
  const inputs = {
    ex: "target area: x=20..30, y=-10..-5",
    input: "target area: x=153..199, y=-114..-75",
  };

  const naturalSeriesSum = (n: number) => (Math.sqrt(8 * n + 1) - 1) / 2;
  const reverseNaturalSeriesSum = (n: number) => (n * (n + 1)) / 2;
  const inBetween = (n: number, start: number, end: number) =>
    n <= Math.max(start, end) && Math.min(start, end) <= n;

  const process = (input: string): unknown => {
    const [, x1, x2, y1, y2] = Array.from(
      input.match(/target area: x=(\d+)..(\d+), y=(-*\d+)..(-*\d+)/)!
    ).map(Number) as [unknown, number, number, number, number];
    const [left, right] = [x1, x2].sort((a, b) => a - b) as [number, number];
    const [bottom, top] = [y1, y2].sort((a, b) => a - b) as [number, number];
    let count = (right - left + 1) * (Math.abs(bottom) - Math.abs(top) + 1);
    let heighest = 0;
    for (let xSpd = Math.ceil(naturalSeriesSum(left)); xSpd <= right; ++xSpd) {
      for (
        let ySpd = Math.abs(bottom) - 1;
        ySpd > (xSpd < left ? bottom : top);
        --ySpd
      ) {
        for (
          let step = 0, x = 0, xStepSpd = xSpd, y = 0, yStepSpd = ySpd;
          x <= right && y >= bottom;
          ++step,
            x += xStepSpd,
            xStepSpd = xStepSpd > 0 ? xStepSpd - 1 : 0,
            y += yStepSpd,
            --yStepSpd
        ) {
          if (inBetween(x, left, right) && inBetween(y, bottom, top)) {
            heighest = Math.max(heighest, reverseNaturalSeriesSum(ySpd));
            ++count;
            break;
          }
        }
      }
    }
    return { heighest, count };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, unknown>>(
      (acc, [key, input]) => ((acc[key] = process(input)), acc),
      {}
    )
  );
}
