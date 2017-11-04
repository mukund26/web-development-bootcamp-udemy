var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

arr = [1, 1, 1];

function isUniform(arr){
	var number = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== number){
			return false;
		} else{
			return true;
		}
	}
}

arr = [1, 3, 5];

function sumArray(arr){
	var total;
	for(var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;
}

arr = [1, 5, 7];

function maxArray(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}