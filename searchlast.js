function dispArr(arr) {
		for (var i = 0; i < arr.length; ++i) {
					write(arr[i] + " ");
							if (i % 10 == 9) {
											write("\n");
													}
								}
			if (i % 10 != 0) {
						write("\n");
							}
}
                                     
 function insertionsort(arr) {
	    var temp, inner;
	       for (var outer = 1; outer <= arr.length-1; ++outer) {
		          temp = arr[outer];
			     inner = outer;
			        while (inner > 0 && (arr[inner-1] >= temp)) {
					   arr[inner] = arr[inner-1];
					      --inner;
					         }
				   arr[inner] = temp;
				      }
 }



var nums = [];
   for (var i = 0; i < 100; ++i) {
	      nums[i] = Math.floor(Math.random() * 101);
   }
   



dispArr(nums);
   write("Enter a number to search for: ");
      var num = parseInt(readline());
         print();
	    if (seqSearch(nums, num)) {
		       print(num + " is in the array.");
		          }
   else {
	      print(num + " is not in the array.");
	         }
   print();
      dispArr(nums);


/*function seqSearch(arr, data) {
		   for (var i = 0; i < arr.length; ++i) {
			      if (arr[i] == data) {
				         return i;
					    }
			         }
		      return -1;
}
*/


function swap(arr, index, index1) {
		temp = arr[index];
			arr[index] = arr[index1];
				arr[index1] = temp;
}



function seqSearch(arr, data) {

	var temp = ''; //will be the number swapped if no others found

	for (var i = 0; i < arr.length; ++i) {

		if (arr[i] == data && i > (arr.length * 0.2)) {

			temp = arr[i];

		//	if(arr[i] < arr.length){
		//		continue; 

		//	}



	//		swap(arr,i,0);

	///		return true;

		}

		else if (arr[i] == data) {

			return true;

		}
	swap(arr,temp,0);
	return true;


	}

	return false;
}

function findMax(arr) {
		var max = arr[0];
			for (var i = 1; i < arr.length; ++i) {
						if (arr[i] > max) {
										max = arr[i];
												}
							}
				return max;
}


function findMin(arr) {
		var min = arr[0];
			for (var i = 1; i < arr.length; ++i) {
						if (arr[i] < min) {
										min = arr[i];
												}
							}
				return min;
}



