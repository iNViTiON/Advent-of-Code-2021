namespace day16 {
  const inputs = {
    2021: "D2FE28",
    part1versionSum16: "8A004A801A8002F478",
    part1versionSum12: "620080001611562C8802118E34",
    part1versionSum23: "C0015000016115A2E0802F182340",
    part1versionSum31: "A0016C880162017C3686B18A3D4780",
    part2solved3: "C200B40A82",
    part2solved54: "04005AC33890",
    part2solved7: "880086C3E88112",
    part2solved9: "CE00C43D881120",
    part2solved1: "D8005AC2A8F0",
    part2solved0: "F600BC2D8F",
    part2solved0_: "9C005AC2F8F0",
    part2solved1_: "9C0141080250320F1802104A08",
    input:
      "0054FEC8C54DC02295D5AE9B243D2F4FEA154493A43E0E60084E61CE802419A95E38958DE4F100B9708300466AB2AB7D80291DA471EB9110010328F820084D5742D2C8E600AC8DF3DBD486C010999B44CCDBD401C9BBCE3FD3DCA624652C400007FC97B113B8C4600A6002A33907E9C83ECB4F709FD51400B3002C4009202E9D00AF260290D400D70038400E7003C400A201B01400B401609C008201115003915002D002525003A6EB49C751ED114C013865800BFCA234E677512952E20040649A26DFA1C90087D600A8803F0CA1AC1F00042A3E41F8D31EE7C8D800FD97E43CCE401A9E802D377B5B751A95BCD3E574124017CF00341353E672A32E2D2356B9EE79088032AF005E7E8F33F47F95EC29AD3018038000864658471280010C8FD1D63C080390E61D44600092645366202933C9FA2F460095006E40008742A8E70F80010F8DF0AA264B331004C52B647D004E6EEF534C8600BCC93E802D38B5311AC7E7B02D804629DD034DFBB1E2D4E2ACBDE9F9FF8ED2F10099DE828803C7C0068E7B9A7D9EE69F263B7D427541200806582E49725CFA64240050A20043E25C148CC600F45C8E717C8010E84506E1F18023600A4D934DC379B9EC96B242402504A027006E200085C6B8D51200010F89913629A805925FBD3322191A1C45A9EACB4733FBC5631A210805315A7E3BC324BCE8573ACF3222600BCD6B3997E7430F004E37CED091401293BEAC2D138402496508873967A840E00E41E99DE6B9D3CCB5E3F9A69802B2368E7558056802E200D4458AF1180010A82B1520DB80212588014C009803B2A3134DD32706009498C600664200F4558630F840188E11EE3B200C292B59124AFF9AE6775ED8BE73D4FEEFFAD4CE7E72FFBB7BB49005FB3BEBFA84140096CD5FEDF048C011B004A5B327F96CC9E653C9060174EA0CF15CA0E4D044F9E4B6258A5065400D9B68",
  };

  const hexToBin = new Map<string, string[]>();
  const getBin = (hex: string) =>
    hexToBin.get(hex) ??
    hexToBin
      .set(hex, Array.from(parseInt(hex, 16).toString(2).padStart(4, "0")))
      .get(hex)!;

  const solveMap = new Map([
    [0, (vals: number[]) => vals.reduce((acc, val) => acc + val, 0)],
    [1, (vals: number[]) => vals.reduce((acc, val) => acc * val, 1)],
    [2, (vals: number[]) => Math.min(...vals)],
    [3, (vals: number[]) => Math.max(...vals)],
    [5, (vals: number[]) => (vals[0]! > vals[1]! ? 1 : 0)],
    [6, (vals: number[]) => (vals[0]! < vals[1]! ? 1 : 0)],
    [7, (vals: number[]) => (vals[0]! === vals[1]! ? 1 : 0)],
  ]);

  const fromBinArray = (bin: string[]) => parseInt(bin.join(""), 2);

  const solvePacket = (packet: Packet): number =>
    (packet.data ??= solveMap.get(packet.type)!(
      packet.packets!.map(solvePacket)
    ));

  const process = (input: string): Result => {
    const inp = Array.prototype.flatMap.call(input, getBin) as string[];

    let offset = 0;
    let versionSum = 0;

    const readBits = (n: number) => inp.slice(offset, (offset += n));

    const getPacket = (): Packet => {
      const version = fromBinArray(readBits(3));
      const type = fromBinArray(readBits(3));
      versionSum += version;
      if (type === 4) {
        let lateral = "";
        while (true) {
          const [first, ...rest] = readBits(5);
          lateral += rest.join("");
          if (first === "0") break;
        }
        const data = parseInt(lateral, 2);
        return { version, type, data };
      } else {
        let packets: Packet[];
        if (readBits(1)[0] === "1") {
          packets = Array.from({
            length: fromBinArray(readBits(11)),
          }).flatMap(getPacket);
        } else {
          const endOffset = fromBinArray(readBits(15)) + offset;
          packets = [];
          while (offset < endOffset) {
            packets.push(getPacket());
          }
        }
        return { version, type, data: undefined, packets };
      }
    };

    return { solved: solvePacket(getPacket()), versionSum };
  };

  console.table(
    Object.entries(inputs).reduce<Record<string, Result>>(
      (acc, [key, input]) => ((acc[key] = process(input)), acc),
      {}
    ),
    ["versionSum", "solved"]
  );
}

interface Packet {
  version: number;
  type: number;
  data: number | undefined;
  packets?: Packet[];
}

interface Result {
  solved: number;
  versionSum: number;
}
