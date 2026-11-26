function countPrimes(upperLimit){
	let runningTotal = ""
	for (let counter = 2; counter <= upperLimit-1; counter++){
		let primeChecker = 0
		for (let prime = 2; prime <= counter-1; prime++){
			if (counter%prime == 0){
				primeChecker++
			}
			else{
				continue
			}
		}
		if (primeChecker == 0){
			runningTotal = runningTotal + counter + " "
		}
		
	}
	return runningTotal
}
console.log(countPrimes(19))


	
			
				