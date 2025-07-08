let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]

const initGradeCount = { A: 0, B: 0, C: 0, F: 0 };

reducedScores = studentScores.reduce((counts, score) =>  {
    if (score >= 90) { counts.A++; } 
    else if (score >= 80) { counts.B++; } 
    else if (score >= 70) { counts.C++; } 
    else { counts.F++; }
    return counts;
}, initGradeCount);
    
console.log(reducedScores)