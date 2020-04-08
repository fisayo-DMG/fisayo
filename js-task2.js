const data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 },
];

const interestCalculator = (data) => {
  const interestData = data.map((item) => {
    const obj = { ...item };
    const { principal, time } = obj;

    if (principal >= 2500 && time > 1 && time < 3) {
      obj.rate = 3;
      obj.interest = (principal * obj.rate * time) / 100;
    } else if (principal >= 2500 && time >= 3) {
      obj.rate = 4;
      obj.interest = (principal * obj.rate * time) / 100;
    } else if (principal < 2500 || time <= 1) {
      obj.rate = 2;
      obj.interest = (principal * obj.rate * time) / 100;
    } else {
      obj.rate = 1;
      obj.interest = (principal * obj.rate * time) / 100;
    }

    return obj;
  });

  console.log(interestData);
  return interestData;
};

interestCalculator(data);

// Console original data to be sure it was not mutated.
console.log("Original data: ", data);
