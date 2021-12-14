namespace day14 {
  const ex = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;
  const inp = `KOKHCCHNKKFHBKVVHNPN

BN -> C
OS -> K
BK -> C
KO -> V
HF -> K
PS -> B
OK -> C
OC -> B
FH -> K
NV -> F
HO -> H
KK -> H
CV -> P
SC -> C
FK -> N
VV -> F
FN -> F
KP -> O
SB -> O
KF -> B
CH -> K
VF -> K
BH -> H
KV -> F
CO -> N
PK -> N
NH -> P
NN -> C
PP -> H
SH -> N
VO -> O
NC -> F
BC -> B
HC -> H
FS -> C
PN -> F
CK -> K
CN -> V
HS -> S
CB -> N
OF -> B
OV -> K
SK -> S
HP -> C
SN -> P
SP -> B
BP -> C
VP -> C
BS -> K
FV -> F
PH -> P
FF -> P
VK -> F
BV -> S
VB -> S
BF -> O
BB -> H
OB -> B
VS -> P
KB -> P
SF -> N
PF -> S
HH -> P
KN -> K
PC -> B
NB -> O
VC -> P
PV -> H
KH -> O
OP -> O
NF -> K
HN -> P
FC -> H
PO -> B
OH -> C
ON -> N
VN -> B
VH -> F
FO -> B
FP -> B
BO -> H
CC -> P
CS -> K
NO -> V
CF -> N
PB -> H
KS -> P
HK -> S
HB -> K
HV -> O
SV -> H
CP -> S
NP -> N
FB -> B
KC -> V
NS -> P
OO -> V
SO -> O
NK -> K
SS -> H`;

  const adder = (obj: Map<string, number>, key: string, addBy: number) =>
    obj.set(key, (obj.get(key) ?? 0) + addBy);

  const process = (input: string, times: number): number => {
    const [template, pairInsertionRaws] = input.split("\n\n") as [
      string,
      string
    ];
    const pairInsertions = [
      ...pairInsertionRaws.matchAll(/(\w{2}) -> (\w)/g),
    ].reduce<Map<string, string>>(
      (acc, [_, pair, insertion]) => acc.set(pair!, insertion!),
      new Map()
    );

    const mapReduceCount = (acc: Map<string, number>, cur: string) =>
      adder(acc, cur, 1);
    const countChar = template
      .split("")
      .reduce<Map<string, number>>(mapReduceCount, new Map());
    let countPair = [...template.matchAll(/(?=(\w{2}))/g)]
      .map(([_, pair]) => pair!)
      .reduce<Map<string, number>>(mapReduceCount, new Map());
    for (let i = 0; i < times; ++i) {
      const cloneCountPair = new Map(countPair);
      for (const [pair, insertion] of [...countPair.entries()]
        .filter(([, count]) => count > 0)
        .map(
          ([cPair]) => [cPair, pairInsertions.get(cPair)] as [string, string]
        )) {
        const [first, second] = pair.split("");
        const matchCount = countPair.get(pair)!;
        adder(cloneCountPair, pair, -matchCount);
        adder(cloneCountPair, first + insertion, matchCount);
        adder(cloneCountPair, insertion + second, matchCount);
        adder(countChar, insertion, matchCount);
      }
      countPair = cloneCountPair;
    }
    const counts = [...countChar.values()];
    return Math.max(...counts) - Math.min(...counts);
  };

  console.log("part 1 (×10)");
  console.log(`  example: ${process(ex, 10)}`);
  console.log(`  result : ${process(inp, 10)}`);
  console.log("part 2 (×40)");
  console.log(`  example: ${process(ex, 40)}`);
  console.log(`  result : ${process(inp, 40)}`);
}
