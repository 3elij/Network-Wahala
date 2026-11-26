function checkPerfectNumber(number){
	let total = 0
	for(let divisor = 1; divisor<=number-1; divisor++){
		if (number%divisor == 0){
			total +=divisor
		}
		else{
			continue
		}
	}
	if (total == number){
		return true
	}
	else{
		return false
	}
	 
}
console.log(checkPerfectNumber(28))