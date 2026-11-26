function isHappyPrimary(number){
	let total = 0
	
	
	while (number != 0){
		let digit = number%10
		number = Math.floor(number/10)
		total = total + (digit*digit)
	}	
	return total	
}




function isHappy(number){
	for(let counter = 1; counter <= 10; counter++){
		number = isHappyPrimary(number)
		if (number === 1){
			return true
		}
	}
	return false
}

console.log(isHappy(4))