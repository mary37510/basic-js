const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
let k = 0.693/HALF_LIFE_PERIOD;

if (typeof(sampleActivity) !== "string") {
  return false;
} else {
  let act = (Number(parseFloat(sampleActivity)));
   if (act > 0 && act < 15.1) {
     return Math.ceil(Math.log(MODERN_ACTIVITY/act)/k);
   }else {
     return false;
   }
}
};

  