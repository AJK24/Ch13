load('searching.js');

function seqSearch(arr, data) {
	
	for (var i = arr.length; i > 0; --i) {
		if (arr[i] == data) {
			return i;
		}   
	}
	return -1;
}


dispArr(arr);
