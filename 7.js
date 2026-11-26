function isPalindrome(number){
	let reversedNumber = 0
	let numberHolder = number
	if (number < 0){
		return false
	}
	else{ 
		while (number != 0){
			let digit = number%10
			number = Math.floor(number/10)
			reversedNumber = (reversedNumber*10)+(digit)
		}
		if (numberHolder == reversedNumber){
			return true
		}
	}
		return false
}
	
		
		
		