// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactor = (specimenNum, dna) =>{
  return{
    _specimenNum: specimenNum,
    _dna : dna,

    get dna(){
      return this._dna;
    },

    get specimenNum(){
      return this._specimenNum;
    },

    set dna(nDna){
      this._dna = nDna;
    },

    set specimenNum(nSp){
      if (typeof nSp === "number"){
        this._specimenNum = nSp;
      }else{
        console.log("false specimenNumber! ");
      }
      
    },

    mutate(){
      const mutationIndex = Math.floot(Math.random() * 15);
      const nDna = this._dna;
      nDna[mutationIndex] = returnRandBase();
      this._specimenNum = nDna;
    },
    compareDna(pAequor ){
      let sameDna = 0;
      for(let i = 0; i < 15; i++){

        if (this.dna[i] === pAequor.dna[i]){
          sameDna += 1;
        }
        
      }
      let result =  Math.floor(sameDna / 15 * 100);
      console.log(`specimen #1 and specimen #2 have ${result}% DNA in common`);
    },
    willLikelySurvive(){
      let surFac = 0;
      for (let i = 0; i < 15; i++){
        if (this._dna[i] === "C" || this._dna[i] === "G"){
          surFac += 1;
        }
      }
      if (surFac / 15 * 100 >= 60){
        return true;
      }else{
        return false;
      }
    }
  }
}

const a = pAequorFactor(1, mockUpStrand());

console.log(a.willLikelySurvive());
const b = pAequorFactor(2, mockUpStrand());
console.log(b);
a.compareDna(b);

let study = []
let num = 30
while (num != 0){
  let i = pAequorFactor(31 - num , mockUpStrand());
  if (i.willLikelySurvive()){
    console.log(i);
    study.push(i);
    num --;
  }
}
console.log(study);

