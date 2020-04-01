const data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 }
];

const calcRateAndInterest = ({ principal, time }) => {
  let rate = 1;
  let interest = null;

  if (principal >= 2500 && time > 1 && time < 3) {
    rate = 3;
  } else if (principal >= 2500 && time >= 3) {
    rate = 4;
  } else if (principal < 2500 || time <= 1) {
    rate = 2;
  }

  interest = (principal * rate * time) / 100;
  return { rate, interest };
};

const interestCalculator = arg => {
  const interestData = [];

  for (const obj of arg) {
    const { rate, interest } = calcRateAndInterest(obj);
    interestData.push({ ...obj, rate, interest });
  }
  
  console.log('New data: ', interestData)
  return interestData;
};

console.log("Original data: ", data);
interestCalculator(data);
