//Series Span
const seriesNum = [
  {
    title: 'The Walkiig Dead',
    days: 4,
    hours: 6,
    minutes: 54,  
  },
  {
    title: 'Vikings',
    days: 6,
    hours: 16,
    minutes: 50,
  },
  {
    title: 'Spatacus',
    days: 7,
    hours: 21,
    minutes: 59,
  },
  {
    title: 'The Tudor',
    days: 5,
    hours: 22,
    minutes: 50,
  }
];
   
function spentTimeOnSeries () {
   const lifeInMin = 80 * (365 * 1440); //total minutes of 365 days in 80 years 
  let sum = 0;
   for (let i = 0; i < seriesNum.length; i++) {
    const oneSeriesInMin = seriesNum[i].days * 1440 + seriesNum[i].hours * 60 + seriesNum[i].minutes;
    const percentageOfLife = (oneSeriesInMin / lifeInMin) * 100;
    sum += percentageOfLife;
    console.log(`${seriesNum[i].title} Series took ${percentageOfLife.toFixed(3)}% of my life.`);
     } 
    console.log(`In total that was ${sum.toFixed(3)}% of my life.`);

   };

spentTimeOnSeries(); // 'The Walkiig Dead Series took 0.015% of my life.'
// 'Vikings Series took 0.023% of my life.'
// 'Spatacus Series took 0.027% of my life.'
// 'The Tudor Series took 0.020% of my life.'
// 'In total that was 0.085% of my life.'

