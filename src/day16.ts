namespace day16 {
  const ex = `EE00D40C823060`;
  const ex1 = `8A004A801A8002F478`;
  const ex2 = `620080001611562C8802118E34`;
  const ex3 = `C0015000016115A2E0802F182340`;
  const ex4 = `A0016C880162017C3686B18A3D4780`;
  const inp = `0054FEC8C54DC02295D5AE9B243D2F4FEA154493A43E0E60084E61CE802419A95E38958DE4F100B9708300466AB2AB7D80291DA471EB9110010328F820084D5742D2C8E600AC8DF3DBD486C010999B44CCDBD401C9BBCE3FD3DCA624652C400007FC97B113B8C4600A6002A33907E9C83ECB4F709FD51400B3002C4009202E9D00AF260290D400D70038400E7003C400A201B01400B401609C008201115003915002D002525003A6EB49C751ED114C013865800BFCA234E677512952E20040649A26DFA1C90087D600A8803F0CA1AC1F00042A3E41F8D31EE7C8D800FD97E43CCE401A9E802D377B5B751A95BCD3E574124017CF00341353E672A32E2D2356B9EE79088032AF005E7E8F33F47F95EC29AD3018038000864658471280010C8FD1D63C080390E61D44600092645366202933C9FA2F460095006E40008742A8E70F80010F8DF0AA264B331004C52B647D004E6EEF534C8600BCC93E802D38B5311AC7E7B02D804629DD034DFBB1E2D4E2ACBDE9F9FF8ED2F10099DE828803C7C0068E7B9A7D9EE69F263B7D427541200806582E49725CFA64240050A20043E25C148CC600F45C8E717C8010E84506E1F18023600A4D934DC379B9EC96B242402504A027006E200085C6B8D51200010F89913629A805925FBD3322191A1C45A9EACB4733FBC5631A210805315A7E3BC324BCE8573ACF3222600BCD6B3997E7430F004E37CED091401293BEAC2D138402496508873967A840E00E41E99DE6B9D3CCB5E3F9A69802B2368E7558056802E200D4458AF1180010A82B1520DB80212588014C009803B2A3134DD32706009498C600664200F4558630F840188E11EE3B200C292B59124AFF9AE6775ED8BE73D4FEEFFAD4CE7E72FFBB7BB49005FB3BEBFA84140096CD5FEDF048C011B004A5B327F96CC9E653C9060174EA0CF15CA0E4D044F9E4B6258A5065400D9B68`;

  const hexToBin: Record<string, string[]> = {
    0: ["0", "0", "0", "0"],
    1: ["0", "0", "0", "1"],
    2: ["0", "0", "1", "0"],
    3: ["0", "0", "1", "1"],
    4: ["0", "1", "0", "0"],
    5: ["0", "1", "0", "1"],
    6: ["0", "1", "1", "0"],
    7: ["0", "1", "1", "1"],
    8: ["1", "0", "0", "0"],
    9: ["1", "0", "0", "1"],
    A: ["1", "0", "1", "0"],
    B: ["1", "0", "1", "1"],
    C: ["1", "1", "0", "0"],
    D: ["1", "1", "0", "1"],
    E: ["1", "1", "1", "0"],
    F: ["1", "1", "1", "1"],
  };

  const process = (input: string): number => {
    const inp = Array.prototype.flatMap.call(
      input,
      (x) => hexToBin[x]
    ) as string[];

    let offset = 0;

    const getVAndT = (): [number, number] => {
      const v = Number.parseInt.call(
        undefined,
        inp.slice(offset, offset + 3).join(""),
        2
      );
      const t = Number.parseInt.call(
        undefined,
        inp.slice(offset + 3, offset + 6).join(""),
        2
      );
      offset += 6;
      return [v, t];
    };

    const getNextPacket = (isSubPacket = false): Packet[] => {
      const [version, type] = getVAndT();
      if (type === 4) {
        let lateral = "";
        let bitRead = 6;
        while (true) {
          const [first, ...rest] = inp.slice(offset, offset + 5);
          offset += 5;
          bitRead += 5;
          lateral += rest.join("");
          if (first === "0") break;
        }
        if (!isSubPacket) {
          offset += 4 - (bitRead % 4 || 4);
        }
        const data = Number.parseInt(lateral, 2);
        return [
          {
            version,
            type,
            data,
          },
        ];
      } else {
        const subPackets: Packet[] = [];
        const lengthTypeId = +inp.slice(offset, offset + 1)[0]!;
        offset += 1;
        if (lengthTypeId) {
          const numberOfSubPackets = Number.parseInt.call(
            undefined,
            inp.slice(offset, offset + 11).join(""),
            2
          );
          offset += 11;
          subPackets.push(
            ...Array.from({ length: numberOfSubPackets }).flatMap(() =>
              getNextPacket(true)
            )
          );
        } else {
          const subPacketsTotalLength = Number.parseInt.call(
            undefined,
            inp.slice(offset, offset + 15).join(""),
            2
          );
          offset += 15;
          const startOffset = offset;
          while (
            subPacketsTotalLength &&
            offset - startOffset < subPacketsTotalLength &&
            offset < inp.length
          ) {
            subPackets.push(...getNextPacket(true));
          }
        }
        return [{ version, type, data: null }, ...subPackets];
      }
    };

    const packets: Packet[] = [];
    while (offset < inp.length) packets.push(...getNextPacket());
    return packets.reduce((acc, { version }) => acc + version, 0);
  };

  console.log("part 1");
  console.log(`  example: ${process(ex)}`);
  console.log(`  example1: ${process(ex1)}`);
  console.log(`  example2: ${process(ex2)}`);
  console.log(`  example3: ${process(ex3)}`);
  console.log(`  example4: ${process(ex4)}`);
  console.log(`  result : ${process(inp)}`);
  // console.log("part 2 (cave dimension ×5)");
  // console.log(`  example: ${process(ex, true)}`);
  // console.log(`  result : ${process(inp, true)}`);
}

interface Packet {
  version: number;
  type: number;
  data: unknown;
}
