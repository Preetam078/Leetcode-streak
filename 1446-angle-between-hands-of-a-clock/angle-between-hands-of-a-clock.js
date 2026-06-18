/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let minuteAngle = minutes * 6;
    let hourAngle = (hour % 12) * 30 + (minutes * 0.5);
    
    let angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
};