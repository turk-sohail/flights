const compareTime = function (timeString1, timeString2) {
  let time1 = new Date(timeString1);
  let time2 = new Date(timeString2);
  return time1.getTime() > time2.getTime();
};

module.exports = compareTime;
