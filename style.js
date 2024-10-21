function checkNumber(){

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (num1 === num2) {
        resultDiv.textContent = `Both numbers are equal: ${num1}`;
    } else {
        if (num1 > num2) {
            resultDiv.textContent = `The larger number is: ${num1}`;
        } else {
            resultDiv.textContent = `The larger number is: ${num2}`;
        }
    }
}




function restart(){

   document.getElementById('num1').value="" ;
   document.getElementById('num2').value="";
   document.getElementById('result').textContent="";

}