function reverseInteger(number){
	let reversedNumber = 0
	let numberHolder = number
	if (number < 0){
		number = number*-1
	}
	while (number != 0){
		let digit = number%10
		number = Math.floor(number/10)
		reversedNumber = (reversedNumber*10)+(digit)
	}
	if (numberHolder < 0){
		reversedNumber = reversedNumber*-1
		return reversedNumber
	}
	else{
		return reversedNumber
	}
}
	
		
		
		