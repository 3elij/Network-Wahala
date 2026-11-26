function climbStairs(totalSteps){
	//fibonacci
	let total = 1
	let previous = 1
	for (let counter= 2; counter <= totalSteps; counter++){
		let next = total+previous
		total = next
		previous = total
	}
		