const reset = document.querySelector("button");
const rates = document.querySelectorAll("#tipperb");
const form = document.querySelector("form");

const numbere = document.querySelector(".error");

const tipam = document.querySelector(".tipam");
const totalam = document.querySelector(".totalam");

const colorCyan = getComputedStyle(document.documentElement).getPropertyValue("--Strongcyan");
const colorCyanD = getComputedStyle(document.documentElement).getPropertyValue("--Verydarkcyan");

const bill = document.getElementById("bill");
const numberof = document.getElementById("numberof");


var clickedrate = null;
var billi = 0;
var numberi = 0;
var rate = 0;
rates.forEach(rate => {
    rate.addEventListener("click", function(){
        if(clickedrate){
            clickedrate.classList.remove("clicked");
            if(clickedrate.nodeName != "INPUT"){
                clickedrate.style.backgroundColor = colorCyanD;
            }
            else clickedrate.style.border = "3px solid transparent"
        }
        rate.classList.add("clicked");
        clickedrate = rate;
        if(rate.nodeName != "INPUT"){
            rate.style.backgroundColor = colorCyan;
        }
        else{
            rate.style.border = `3px solid ${colorCyan}`
        }
        myfunction();
    })
})

reset.addEventListener("click", function(event){
    form.reset();
    billi = 0;
    numberi = 0;
    rate = 0;
    if(clickedrate){
        clickedrate.classList.remove("clicked")
        if(clickedrate.nodeName != "INPUT"){
            clickedrate.style.backgroundColor = colorCyanD;
        }
        else clickedrate.style.border = "3px solid transparent"
    }
    clickedrate = null;
    tipam.textContent = "0.00";
    totalam.textContent = "0.00";
})

form.addEventListener("change", myfunction);

numberof.addEventListener("input", function(){
    if(numberof.value == 0){
        numbere.style.display = "block"
        numberof.style.border = "3px solid red"
    }
    else{
        numbere.style.display = "none"
        numberof.style.border = `3px solid ${colorCyan}`
    }
})
function myfunction(){
    billi = parseFloat(bill.value);
    if(clickedrate){
        if(clickedrate.nodeName == "INPUT") rate = parseFloat(clickedrate.value) /100;
        else rate = parseFloat(clickedrate.classList[0]) / 100;
    }
    if(numberof.value != 0){
        numberi = parseInt(numberof.value);

        const tipamount = (billi * rate) / numberi;
        const totalamount = tipamount + (billi / numberi);

        tipam.textContent = tipamount.toFixed(2);
        totalam.textContent = totalamount.toFixed(2);
    }
}