export function DNAStrand(dna: string) {
    const complimentaryBases = dna.split("").map((base)=> getComplimentaryBases(base))
    const complimentaryStrand = complimentaryBases.join("")
    return complimentaryStrand
  }
  
 export function getComplimentaryBases(base: string){
    switch (base){
        case 'A': 
         return  base.replace('A', 'T')
        break;
        case 'T': 
          return base.replace('T', 'A')
        break;
         case 'C': 
         return  base.replace('C', 'G')
        break;
         case 'G': 
         return base.replace('G', 'C')
        break;
    }
  }