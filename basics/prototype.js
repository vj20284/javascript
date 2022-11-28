function UserP(first, last) {
    this.first = first;
    this.last = last;
}

// The prototyping pattern is implemented by defining the
// function inside the prototype attribute of the object
// instead of the object itself. The advantage of prototyping
// is that the functions defined in the prototype are created
// only once when the javascript is loaded, instead of each
// time a new object is created.
UserP.prototype = {
    getFullName: function() {
        return this.first + " " + this.last;
    }
};