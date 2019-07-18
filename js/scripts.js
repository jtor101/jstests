// First Trial Function.  Displays window with x + y result and writes to console.

function1();

function function1() {
    var var1 = 5;
    var var2 = 10;
    var var3 = var1 + var2;
    window.alert("Trial 1: var3 = " + var3);
    console.log("Trial 1: var3 = " + var3);
}


// Second Trial Function.  Changes "Welcome!" badge to "Hello!" badge and writes to console.

function2();

function function2() {

    document.getElementById('headBadge').innerHTML = "Hello!";
    window.alert("Trial 2: headBadge changed to " + headBadge.innerHTML);
    console.log("Trial 2: headBadge changed to " + headBadge.innerHTML);
}


// Third Trial Function.  Alert window populates with "This is a test."

function3();

function function3() {
    var trial3 = "This is a ";
    window.alert("Trial 3: " + trial3 + "test.");
    console.log("Trial 3: " + trial3 + "test.");
}

// Fourth Trial.

function4();

function function4() {


}