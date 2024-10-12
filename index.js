document.getElementById("Checkbutton").addEventListener("click", function () {
    const tallValue = document.getElementById("tall").value;
    const weightValue = document.getElementById("weight").value;
    const tall = parseFloat(tallValue) / 100;
    const weight = parseFloat(weightValue);
    const display1 = document.getElementById("display1");
    const display2 = document.getElementById("display2");

    if (tallValue === "" || weightValue === "") {
        display2.style.color = "red";
        display2.style.fontSize = "20px";
        display2.innerText = "Please enter height and weight.";
        return; 
    }

    if (tall && weight) {
        console.log(tall);
        console.log(weight);
        display2.innerText = "";
        display1.innerText = "";
        display2.style.color = "black";
        display2.style.fontSize = "30px";

        let bmi = weight / (tall * tall);

        if (bmi < 18.5) {
            display1.innerText = "Pants : 27-28-30 / S";
            display2.innerText = "T-shirts : S";
        } else if (bmi < 21.5) {
            display1.innerText = "Pants : 32-33 / M";
            display2.innerText = "T-shirts : M";
        } else if (bmi < 24.9) {
            display1.innerText = "Pants : 34-36 / L";
            display2.innerText = "T-shirts : L";
        } else if (bmi < 29.9) {
            display1.innerText = "Pants : 38-40 / XL";
            display2.innerText = "T-shirts : XL";
        } else if (bmi < 34.9) {
            display1.innerText = "Pants : 42 / XXL";
            display2.innerText = "T-shirts : XXL";
        } else {
            display1.innerText = "Pants : 44+ / XXXL";
            display2.innerText = "T-shirts : XXXL";
        }
    } else {
        display2.style.color = "red";
        display2.style.fontSize = "20px";
        display2.innerText = "Please enter valid height and weight.";
    }
});
