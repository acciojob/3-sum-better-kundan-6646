function threeSum(arr, target) {
	let closest = arr[0] + arr[1] + arr[2];
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++) {
			for(let k = j+1; k < arr.length; k++){
				let currSum = arr[i] + arr[j] + arr[k];
				if(Math.abs(target-closest) > Math.abs(target - currSum)) {
					closest = currSum;
				}
			}
		}
	}

	return closest;
}

module.exports = threeSum;
