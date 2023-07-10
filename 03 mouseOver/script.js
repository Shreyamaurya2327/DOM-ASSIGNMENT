// mouseover

// The mouseover event is fired at an Element when a pointing  device (such as a mouse or trackpad)
//  is used to move the cursor onto the Element or one  of its child elements.

const boxElement = document.getElementById ("box");

// adding a mouseover event listener to the  element
boxElement.addEventListener("mouseover", function () {
    alert(
        "you entered in Restricted Area (mouse over event is working properly)"
    );
});
