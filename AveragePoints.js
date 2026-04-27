// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


function betterThanAverage(classPoints, yourPoints) {

  let classPointsSum = 0
  let averageScore = 0

  for(i=0; i < classPoints.length; i++) {
    classPointsSum += classPoints[i];
  }
  averageScore = classPointsSum / classPoints.length;
  
  return (yourPoints > averageScore) ? true : false;
}

// What I Used: (Simple)
// 1- clear that we have 2 virables for the sum of the points and the average score 
// 2- Best Practice that I found after I submitted the solution: 
//  function betterThanAverage(classPoints, yourPoints) {
//    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//  }
// He just take the shourtcut (reduce) function to get the sum of all the array and (/) them 
//
//
//
//
//
//
//
//
//