load('searchlast.js');

function swap(arr, index, index1) {
		temp = arr[index];
			arr[index] = arr[index1];
				arr[index1] = temp;
}

var numbers = [5,1,7,4,2,10,9,3,6,2,8];
print(numbers);
for (var i = 1; i <= 3; i++) {
		seqSearch(numbers, 8);
		swap(numbers, 0, i);
			print(numbers);
}
