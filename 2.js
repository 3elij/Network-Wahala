function isPowerOfTwo(number){
	while (number > 1){
		let counter = 0
		number = number/2
		if (number == 1){
			return true;
		}
	}
	return false;