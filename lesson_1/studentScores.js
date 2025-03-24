let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(getStudentGrade),
    exams: getExamSummary(examData),
  };
}

function getStudentGrade(scoreObj) {
  const examAverage = Math.round(
    scoreObj.exams.reduce(
      (total, score) => total + score, 0) / scoreObj.exams.length
  );
  const exerciseTotal = scoreObj.exercises.reduce(
    (total, score) => total + score, 0);
  const percentGrade = Math.round(examAverage * 0.65 + exerciseTotal * 0.35);
  
  if (percentGrade >= 93) {
    return `${percentGrade} (A)`;
  } else if (percentGrade >= 85) {
    return `${percentGrade} (B)`;
  } else if (percentGrade >= 77) {
    return `${percentGrade} (C)`;
  } else if (percentGrade >= 69) {
    return `${percentGrade} (D)`;
  } else if (percentGrade >= 60) {
    return `${percentGrade} (E)`;
  } else {
    return `${percentGrade} (F)`
  }
}

function getExamSummary(examData) {
  const listOfExamScores = examData.reduce((examScores, studentScores) => {
    studentScores.forEach((score, examIndex) => {
      if (!examScores[examIndex]) {
        examScores[examIndex] = [];
      }
      examScores[examIndex].push(score);
    });
    return examScores;
  }, []);

  return listOfExamScores.map(examScores => ({
    average: getExamAverage(examScores),
    minimum: examScores.reduce((min, score) => (min <= score ? min : score)),
    maximum: examScores.reduce((max, score) => (max <= score ? max : score))
  }));
}

function getExamAverage(scores) {
  return parseFloat(scores.reduce(
                          (total, score) => total + score, 0) / scores.length)
                          .toFixed(1);
}


generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }