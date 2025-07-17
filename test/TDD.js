function validate(boolarr){
    let trueCount =0, falseCount=0
    boolarr.forEach(element => {
        if (typeof element === "boolean"){
            if (element === true) trueCount++;
            else falseCount++;
        }        
    })
    if (trueCount+falseCount>0) return trueCount > falseCount
    else return {error: "Need at least one boolean"}
}

module.exports={validate}