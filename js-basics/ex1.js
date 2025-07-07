let v1= {
    name : "p1",
    age : 20 ,
    city: "Ashdod"
}

let v2= {
    name : "p2",
    age : 20 ,
    city: "Ashkelon"
}


if (v1['age'] == v2['age']){
    if(v1['city'] == v2['city']){
        console.log("Jill wanted to date Robert")
    }
    else{
        console.log("Jill wanted to date Robert, but couldn't")
    }
}