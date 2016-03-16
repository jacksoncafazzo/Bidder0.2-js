module.exports.time = time;

function time(alarm) {
  this.alarm = alarm;
}

time.prototype.ringTheAlarm = function() {
  if (moment() === this.alarm) {
    return console.log("DINGDINGDINGDINGDINGDINGDINGDINGDINGDING");
  } else {
    updateTime();
  }
};
