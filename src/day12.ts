namespace day12 {
  const ex1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;
  const ex2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;
  const ex3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;
  const inp = `OU-xt
hq-xt
br-HP
WD-xt
end-br
start-OU
hq-br
MH-hq
MH-start
xt-br
end-WD
hq-start
MH-br
qw-OU
hm-WD
br-WD
OU-hq
xt-MH
qw-MH
WD-qw
end-qw
qw-xt`;

  const toEnd = (
    current: Cave,
    visited: Set<string>,
    caves: Record<string, Cave>,
    allowTwice: boolean
  ): number => {
    current.isSmall && visited.add(current.name);
    return current.name === "end"
      ? 1
      : current.links
          .filter((link) => allowTwice || !visited.has(link))
          .reduce(
            (acc, link) =>
              acc +
              toEnd(
                caves[link]!,
                new Set(visited),
                caves,
                allowTwice && !visited.has(link)
              ),
            0
          );
  };

  const process = (input: string, allowTwice: boolean = false): number => {
    const paths: [string, string][] = input
      .split("\n")
      .map((line) => line.split("-") as [string, string]);
    const caves: Record<string, Cave> = Array.from(
      new Set<string>(paths.flat()).values()
    )
      .map((cave) => ({
        name: cave,
        isSmall: cave === cave.toLowerCase(),
        links: paths
          .filter((path) => path.includes(cave))
          .map(([from, to]) => (from === cave ? to : from))
          .filter((cave) => cave !== "start"),
      }))
      .reduce<Record<string, Cave>>(
        (acc, cave) => ((acc[cave.name] = cave), acc),
        {}
      );
    return toEnd(caves["start"]!, new Set<string>(), caves, allowTwice);
  };
  const process2 = (input: string) => process(input, true);

  console.log("part 1");
  console.log(`example: ${process(ex1)}, ${process(ex2)}, ${process(ex3)}`);
  console.log(`result: ${process(inp)}`);
  console.log("\npart 2");
  console.log(`example: ${process2(ex1)}, ${process2(ex2)}, ${process2(ex3)}`);
  console.log(`result: ${process2(inp)}`);
}

interface Cave {
  name: string;
  isSmall: boolean;
  links: string[];
}
