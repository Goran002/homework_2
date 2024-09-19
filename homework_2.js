Task 1

let AgeOfUser = +prompt('How old are you?',1); 
let NameOfAge = prompt('Years?Months?');

if(NameOfAge == 'months' && AgeOfUser < 12){ 
	console.log(`"baby"`);
} else if((AgeOfUser <= 2 && NameOfAge == 'years') || (NameOfAge == 'months' && AgeOfUser == 12)){ 
	console.log(`"toddler"`);
} else if(AgeOfUser <= 12 && NameOfAge == 'years'){ 
	console.log(`"child"`); 
} else if(AgeOfUser <= 17 && NameOfAge == 'years'){ 
	console.log(`"teenager"`); 
} else{ 
	console.log(`"adult"`);
}

Task 2 

let firstNum= +prompt(),secondNum= +prompt(),ThirdNum = +prompt();
if(firstNum > secondNum){ 
	let temp = firstNum;
	firstNum = secondNum;  
	secondNum = temp; 
	console.log(firstNum,secondNum,ThirdNum);
} 
if(firstNum > ThirdNum){ 
	let temp = firstNum;   
	firstNum = ThirdNum; 
	ThirdNum = temp 
	console.log(firstNum,secondNum,ThirdNum);
}
if(secondNum > ThirdNum){ 
	let temp = secondNum ;
	secondNum = ThirdNum ; 
	ThirdNum = temp; 
	console.log(firstNum,secondNum,ThirdNum);
}



Task 3
let firstNum= +prompt(),secondNum= +prompt(),ThirdNum = +prompt();
if(firstNum == 0 || secondNum == 0  || ThirdNum == 0){ 
	console.log(`"Unsigned"`);
} else if(firstNum < 0 && secondNum < 0 && ThirdNum < 0){ 
	console.log(`"-"`)
}else if((firstNum < 0 && secondNum < 0 && ThirdNum > 0) || (firstNum < 0 && ThirdNum < 0 && secondNum > 0) || (secondNum < 0 && ThirdNum < 0 && firstNum > 0) ){ 
	console.log(`"+"`) ;
} else if (firstNum > 0 && secondNum > 0 && ThirdNum > 0) {
	console.log(`"+"`);
} else {
	console.log(`"-"`);
}

Task 4
let n = +prompt();
let i = 0, j = 0 ; 	
if(n % 2 === 0 && (!Math.floor(n/10))){ 
	++i;
}

if(n % 3 === 0 && n % 10 === 1 ){ 
	++j;
}
console.log(i,j)


Task 5 
let firstNum = +prompt(); 
while(firstNum > 0 ){ 
	let digit = firstNum % 10 ; 
	firstNum = Math.floor(firstNum / 10) ; 
	console.log(digit) 
}
