namespace day24 {
  const inputs = {
    in: `inp w
mul x 0
add x z
mod x 26
div z 1
add x 13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 10
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 5
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -2
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 10
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -6
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 3
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x 0
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -15
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -4
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y`,
  };

  const instructionMap = new Map([
    [
      "inp",
      (
        reg: Register,
        des: RegisterChar,
        src: RegisterChar | number | undefined
      ) => (reg[des] = +src!),
    ],
    [
      "add",
      (
        reg: Register,
        des: RegisterChar,
        src: RegisterChar | number | undefined
      ) => (reg[des] += Number.isNaN(+src!) ? reg[src as RegisterChar] : +src!),
    ],
    [
      "mul",
      (
        reg: Register,
        des: RegisterChar,
        src: RegisterChar | number | undefined
      ) => (reg[des] *= Number.isNaN(+src!) ? reg[src as RegisterChar] : +src!),
    ],
    [
      "mod",
      (
        reg: Register,
        des: RegisterChar,
        src: RegisterChar | number | undefined
      ) => (reg[des] %= Number.isNaN(+src!) ? reg[src as RegisterChar] : +src!),
    ],
    [
      "div",
      (
        reg: Register,
        des: RegisterChar,
        src: RegisterChar | number | undefined
      ) =>
        (reg[des] = Math.floor(
          reg[des] / (Number.isNaN(+src!) ? reg[src as RegisterChar] : +src!)
        )),
    ],
    [
      "eql",
      (
        reg: Register,
        des: RegisterChar,
        src: RegisterChar | number | undefined
      ) =>
        (reg[des] =
          (Number.isNaN(+src!) ? reg[src as RegisterChar] : +src!) === reg[des]
            ? 1
            : 0),
    ],
  ]);

  // let inputI = 0;
  const doCommand = (
    register: Register,
    [instruction, des, src]: Instruction,
    input: string,
    meta: { inputI: number }
  ): Register => (
    instructionMap.get(instruction)!(
      register,
      des,
      instruction === "inp" ? +input[meta.inputI++]! : src
    ),
    register
  );

  const validateMonad = (instructions: Instruction[], monad: string) => {
    let register: Register = { w: 0, x: 0, y: 0, z: 0 };
    const meta = { inputI: 0 };
    for (let i = 0; i < instructions.length; ++i) {
      doCommand(register, instructions[i]!, monad, meta);
    }
    return (register.z === 0 ? "valid" : "invalid") + " MONAD";
  };

  const doStep = (
    z: number,
    w: number,
    [v1, v2, v3]: [number, number, number]
  ): number => {
    const x = (z % 26) + v2 !== w;
    // const y = x ? w + v3 : 0;
    // z *= x ? 26 : 1;
    // z /= v1;
    // z += y
    // return z;
    return Math.floor((z * (x ? 26 : 1)) / v1) + (x ? w + v3 : 0);
  };

  const base26 = (vars: Variables, finding: number) =>
    vars
      .map(([v1]) => (v1 === finding ? 1 : 0))
      .map((_, i, arr) => arr.slice(i + 1).reduce<number>((a, b) => a + b, 0))
      .map((d) => Math.pow(26, d));

  const process = (input: string): object => {
    // combine all optimize I can think of
    const instructionVars = [
      ...input.matchAll(
        /div z (\d+)\sadd x (-*\d+)[\s|\S]+?add y w\sadd y (\d+)/g
      ),
    ].map(
      ([_, ...capture]) =>
        capture.map((c) => Number(c)) as [number, number, number]
    ) as Variables;

    const stepLimits = base26(instructionVars, 26);
    const stepTimes = base26(instructionVars, 1);

    const check = (i: number, z: number, a: string) => {
      if (i === 13) {
        return z === 0 ? a : false;
      }
      return z * stepTimes[i]! > stepLimits[i]! ? false : span(i, z, a);
    };

    const span = (i = -1, z = 0, a = ""): string[] =>
      [9, 8, 7, 6, 5, 4, 3, 2, 1]
        .flatMap((n) =>
          check(i + 1, doStep(z, n, instructionVars[i + 1]!), a + n)
        )
        .filter((result): result is string => result !== false);
    const allMonad = span();
    const [largest, smallest] = [allMonad.shift()!, allMonad.pop()!];

    // classic ALU run. write for brute force but too slow
    const instructions = input
      .split("\n")
      .map(
        (line) => line.match(/^([a-z]+) ([w-z]) *([w-z]|-*\d+)?/)?.slice(1, 4)!
      )
      .map(([ins, des, src]) => {
        const srcNum = Number(src);
        return [ins, des, Number.isNaN(srcNum) ? src : srcNum] as Instruction;
      });

    console.log("largest is", validateMonad(instructions, largest));
    console.log("smallest is", validateMonad(instructions, smallest));

    return { largest, smallest };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, unknown>>(
      (acc, [key, input]) => ((acc[key] = { ...process(input) }), acc),
      {}
    )
  );

  type InstructionType = "inp" | "add" | "mul" | "mod" | "div" | "eql";
  type RegisterChar = "w" | "x" | "y" | "z";
  type Instruction = [
    InstructionType,
    RegisterChar,
    number | RegisterChar | undefined
  ];
  interface Register {
    w: number;
    x: number;
    y: number;
    z: number;
  }
  type Variable = [number, number, number];
  type Variables = [
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable,
    Variable
  ];
}
