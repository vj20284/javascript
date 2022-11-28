// Class can be used as an expression as well as a statement. As an expression it returns a new class each time it's evaluated.
// The extends clause accepts arbitrary expressions that return classes or constructors
// All we need to define a mixin is a function that accepts a superclass and creates a new subclass from it, like this:

const MyMixins = superclass =>
    class extends superclass {
        moveUp() {
            console.log('move up');
        }
        moveDown() {
            console.log('move down');
        }
        stop() {
            console.log('stop! in the name of love!');
        }
    };

// A skeleton carAnimator constructor
class CarAnimator {
    moveLeft() {
        console.log('move left');
    }
}
// A skeleton personAnimator constructor
class PersonAnimator {
    moveRandomly() {
        /*..*/
    }
}

// Extend MyMixins using CarAnimator
class MyAnimator extends MyMixins(CarAnimator) {}

// Create a new instance of carAnimator
const myAnimator = new MyAnimator();
myAnimator.moveLeft(); //move left
myAnimator.moveDown(); // move down
myAnimator.stop(); // stop! in the name of love!
