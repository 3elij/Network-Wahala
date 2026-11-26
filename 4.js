function mySqrt(number){
	for( let square =0; square <= number; square++){
		if (square*square > number&& number!=1){
			return square-1;
		}
		else if (number == 1){
			square = 1
			return square
		else{
			continue
		}
	}