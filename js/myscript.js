var strSum = prompt("Enter the deposit amount", 100);
var strPercent = prompt("Enter the interest rate", 10);
var sum = parseInt(strSum);
var percent = parseInt(strPercent);
var income = sum * percent / 100;
var message = "";

if(income > 100){

        message = "Income is greater than 100";

} else {

        message = "Income is less than or equal to 100";

}
alert(message);

sum += income;
alert("The deposit sum after: " + sum);
function menu(num){
	if(num == 1){
		return function(a, b){return a + b};
	} else if(num == 2){
		return function(a, b){return a*b};
	} else if(num == 3){
		return function(a, b){return a**b};
	} 
	return function(a, b){return 0 };
}
var flag = "";
do {
var strOpt = prompt("Choose an option: ");
var opt = parseInt(strOpt);
var fufa = menu(opt);
var strNum1 = prompt("Enter the first number:");
var strNum2 = prompt("Enter the second number:");
var a = parseInt(strNum1);
var b = parseInt(strNum2);
alert("Result of function is " + fufa(a,b));
var cont = prompt("Do you want to continue?(1/0)");
flag = parseInt(cont);

} while(flag)
