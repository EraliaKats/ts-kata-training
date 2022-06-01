import { DNAStrand, getComplimentaryBases } from "./1-dnaStrand"

test("returns the right complimentary base", ()=>{
    expect(getComplimentaryBases('A')).toStrictEqual('T')
    expect(getComplimentaryBases('T')).toStrictEqual('A')
    expect(getComplimentaryBases('C')).toStrictEqual('G')
    expect(getComplimentaryBases('G')).toStrictEqual('C')
})

test("returns the right complimentary dna strand", ()=> {
    expect(DNAStrand("AATC")).toStrictEqual("TTAG")
    expect(DNAStrand("")).toStrictEqual("")
})