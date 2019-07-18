// #headBadge = heading badge
// #btn1 = button ID

// First Trial Function.  Displays window with x + y result and writes to console.

function1();

function function1() {
    var var1 = 5;
    var var2 = 10;
    var var3 = var1 + var2;
    //window.alert("Trial 1: var3 = " + var3);
    console.log("Trial 1: var3 = " + var3);
}

// Second Trial Function.  Changes "Welcome!" badge to "Hello!" badge and writes to console.

function2();

function function2() {

    document.getElementById('headBadge').innerHTML = "Hello!";
    //window.alert("Trial 2: headBadge changed to " + headBadge.innerHTML);
    console.log("Trial 2: headBadge changed to " + headBadge.innerHTML);
}

// Third Trial Function.  Alert window populates with "This is a test."

function3();

function function3() {
    var trial3 = "This is a ";
    //window.alert("Trial 3: " + trial3 + "test.");
    console.log("Trial 3: " + trial3 + "test.");
}

// Fourth Trial. Trying out typeof operator.

function4();

function function4() {
    var trialline = "This is a ";
    var trial4a = "test";
    var trial4b = 5;

    //window.alert("Trial 4a: " + trialline + "" + typeof trial4a);
    //window.alert("Trial 4b: " + trialline + "" + typeof trial4b);
    console.log("Trial 4a: " + trialline + "" + typeof trial4a);
    console.log("Trial 4b: " + trialline + "" + typeof trial4b);
    console.log("Trial 4c: " + trialline + "" + typeof function4);

}

// Fifth Trial. Event Listeners with Button Clicks.

document.getElementById("btn1").addEventListener("click", function5);

function function5() {
    document.getElementById("btn1").innerHTML = "High Voltage!";
    document.getElementById("headBadge").innerHTML = "Danger! Danger!";
    console.log("Trial 5a: Danger button changes to High Voltage! button on click")
    console.log("Trial 5b: Hello! headBadge changes to Danger Danger! headBadge on click")
}

// Sixth Trial.