function hammingWeight(number){
	let max = 2
	while (max < number){
		max = max*max
	}
	
	
	let counter = 0
	
	while (number !=0){
		while (max > number){
			max = max/2
		}
		number = number-max
		max = max/2
		counter++
	}
		return counter
	
}
console.log(hammingWeight(256))


	