load('searching.js');



function seqSearch(arr, data) {
	//changed so now it starts at the back and comes forward	
	for (var i = arr.length; i > 0; --i) {
		if (arr[i] == data) {
			return i;
		}   
	}
	return -1;
}

//display the array.
//dispArr(arr);
