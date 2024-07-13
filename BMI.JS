let button = document.getElementById("btn")


button.addEventListener('click', () =>{
    const height = parseInt(document.getElementById("input1").value);
    const weight = parseInt(document.getElementById("input2").value);



    if(weight <= 0 || weight === '' || isNaN(weight)){
        document.getElementById('err2').innerHTML = "Enter a valid number!";
    }else{
        document.getElementById('err2').innerHTML = '';
    }

    if(height <= 0 || height === '' || isNaN(height)){
        document.getElementById('err1').innerHTML = "Enter a valid number!";
    }else{
        document.getElementById('err1').innerHTML = '';
    }


    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        document.getElementById("result1").innerHTML = "Your bmi is " + bmi.toFixed(2);
    
    if (bmi < 18.5){
        document.getElementById("result2").innerHTML = "Your are under-weight";
    }else if (bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("result2").innerHTML = "Your are normal";
    }else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("result2").innerHTML = "Your are overweight";
    }else if (bmi >= 30 && bmi <= 34.9){
        document.getElementById("result2").innerHTML = "Your are obese";
    }else if (bmi >= 35){
        document.getElementById("result2").innerHTML = "Your are exteremly obese";
    }else{
        alert("Please enter a valid number for your values!")
    }
}

});