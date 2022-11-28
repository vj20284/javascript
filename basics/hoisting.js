function myfunction() {
    var myArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May'], myArrayLength = myArray.length, counter = 0;

    for(var index = 0; index < myArrayLength; index++) {
        counter = index + 1;
    }

    console.log(counter); // 5
    console.log(index); // 5
    console.log(myArrayLength); // 5

    if (myArrayLength > 0) {
        // declarations are hoisted - not initializations
        var counter, index = 0, myArrayLength;
        counter = 2;
    }
    console.log(counter); // 2
    console.log(index); // 0
    console.log(myArrayLength); // 5
}

myfunction();