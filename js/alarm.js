exports.ringTheAlarm = function(timeArray, now) {
  for(var i = 0; i < timeArray.length; i++) {
    if(timeArray[i] !== null) {
      if(now.diff(timeArray[i], 'milliseconds') >= -495 && now.diff(timeArray[i], 'milliseconds') <= 495) {
        return true;
      }
    }
  }
  return false;
}
