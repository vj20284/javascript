function Accommodation() {
    this.isAlarmed = false;
}

// mixin - object whose functions can be used in conjunction 
// with an object in your code
var AlarmSystem = {
    arm: function(message) {
        this.isAlarmed = true;
        console.log(message);
    },
    disarm: function(message) {
        this.isAlarmed = false;
        console.log(message);
    }
};

var myHouse = new Accommodation();

AlarmSystem.arm.call(myHouse, "Alarm activated");
console.log(myHouse.isAlarmed);
AlarmSystem.disarm.apply(myHouse, ["Alarm deactivated"]);
console.log(myHouse.isAlarmed);