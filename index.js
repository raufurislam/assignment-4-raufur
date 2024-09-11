// Problem 1
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  const diffeence = income - expenses;
  const tax = diffeence * 0.2;
  return tax;
}

// problem 1 test
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax(5000, 15000));
console.log(calculateTax(5000, 0));
console.log(calculateTax(-5000, -1500));

// Problem 2
function sendNotification(email) {
  const emailPart = email.split("@");
  if (email.includes("@") !== true || emailPart.length !== 2) {
    return "Invalid Email";
  }
  const userName = emailPart[0];
  const domainName = emailPart[1];
  return userName + " sent you an email from " + domainName;
}

// problem 2 test
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("zihadgmail.com"));

// Problem 3
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (const character of name) {
    if (!isNaN(character) && character !== " ") {
      return true;
    }
  }
  return false;
}

// problem 3 test
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("sumon"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));
console.log(checkDigitsInName(" "));

// // Problem 4
function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    obj.testScore > 50 ||
    typeof obj.schoolGrade !== "number" ||
    obj.schoolGrade > 30 ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  const finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);
  return finalScore >= 80;
}

// problem 4 test
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);

// Problem 5
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid  Input";
  }
  let totalTime = 0;
  for (let times of waitingTimes) {
    totalTime = totalTime + times;
  }
  let avarageTime = Math.round(totalTime / waitingTimes.length);
  let peopleWaiting = serialNumber - 1 - waitingTimes.length;
  return peopleWaiting * avarageTime;
}

// problem 5 test
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
