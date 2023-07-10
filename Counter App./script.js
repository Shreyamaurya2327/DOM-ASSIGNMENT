// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("resetBtn");
const displayvalue = document.getElementById("displayValue");

// for decrement button click
decrementBtn.addEventListener("click", () => { 
    const value = Number(displayValue.innerText);
    if (value > 0 ) { 
        displayValue.inner.Text = value - 1;
    } else {
        alert("Negative value not allowed");
    }
});

// for increment button click
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
        alert("10+ values are not allowed");
    }else {
        displayValue.innerText = value +1;
    }
});
