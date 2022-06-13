export function DNAStrand(dna: string): string {
  const complimentaryBases = dna
    .split("")
    .map((base) => getComplimentaryBases(base));
  const complimentaryStrand = complimentaryBases.join("");
  return complimentaryStrand;
}

export function getComplimentaryBases(base: string): string | undefined {
  switch (base) {
    case "A":
      return base.replace("A", "T");
    case "T":
      return base.replace("T", "A");
    case "C":
      return base.replace("C", "G");
    case "G":
      return base.replace("G", "C");
  }
}
