var Accommodation = (function() {
    function Accommodation() {}

    // Private variables - not available outside this scope, underscore is just a convention
    var _isLocked = false, _isAlarmed = false, _alarmMessage = "Alarm activated";

    // Private method - not on the prototype of the constructor
    function _alarm() {
        _isAlarmed = true;
        alert(_alarmMessage);
    }

    function _disableAlarm() {
        _isAlarmed = false;
    }

    // Public methods - accessible outside this scope since they are on the prototype
    Accommodation.prototype.lock = function() {
        _isLocked = true;
        _alarm();
    };

    Accommodation.prototype.unlock = function() {
        _isLocked = false;
        _disableAlarm();
    };

    // Simulate a getter function to allow public read only access
    Accommodation.prototype.getIsLocked = function() {
        return _isLocked;
    };

    // Simulate setter function to allow public write only access
    Accommodation.prototype.setAlarmMessage = function(message) {
        _alarmMessage = message;
    };

    return Accommodation;
}());

var house = new Accommodation();
house.lock();

house._alarm(); // this gives an error since it's a private method