/** Taller de complejidad computacional
 * @author Aldair Bernal <@aldair47x>
 */
console.log('« Taller ordenamiento y búsqueda » \n \n \n \n');


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
generateRandomNumber = () => {
    let firstRange = process.argv[2];
    let lastRange = process.argv[3];

    return Math.round(Math.random() * (lastRange - firstRange) + firstRange);
}

generateRandomArray = () => {
    let limitArrayLength = process.argv[4];
    let randomArray = [];
    if (limitArrayLength > 999) {
        for (let i = 0; i <= limitArrayLength; i++) {
            randomArray[i] = generateRandomNumber();
        }

        return randomArray;
    } else {
        return
    }
}

/** Javascript Algorithms — Bubble Sort
 * @author Kyle Jensen 
 */
bubbleSort = (inputArr) => {

    console.log('Bubble sort Algorithm ✰ \n');
    let end, start;

    start = new Date();

    let comparisonsNumber = 0;
    let swapNumber = 0;
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
                swapNumber++;
            }
            comparisonsNumber++;
        }
    } while (swapped);

    end = new Date();

    console.log('- Operation took ' + (end.getTime() - start.getTime()) / 1000 + ' secs');

    console.log('- Number of comparisons done: ', comparisonsNumber);
    console.log('- Number of swap done: ', swapNumber, '\n');
    return inputArr;
};

/** Javascript Algorithms — insertionSort
 * @author Kyle Jensen 
 */
insertionSort = (inputArr) => {

    console.log('Insertion sort Algorithm ✰ \n');


    let comparisonsNumber = 0;
    let swapNumber = 0;


    let end, start;

    start = new Date();


    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
            swapNumber++;
        }
        comparisonsNumber++;
        inputArr[j + 1] = key;
    }


    end = new Date();

    console.log('- Operation took ' + (end.getTime() - start.getTime()) / 1000 + ' secs');

    console.log('- Number of comparisons done: ', comparisonsNumber);
    console.log('- Number of swap done: ', swapNumber, '\n');

    return inputArr;
};


// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values

/** Javascript Algorithms — QuickSort
 * @author claudiahdz 
 */

var comparisonsNumber1 = 0;
var swapNumber1 = 0;

partition = (arr, left, right) => {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left, // Start pointer at the first item in the array
        j = right // Start pointer at the last item in the array

    while (i <= j) {

        // Move left pointer to the right until the value at the
        // left is greater than the pivot value
        while (arr[i] < pivot) {
            i++
            comparisonsNumber1++;
        }

        // Move right pointer to the left until the value at the
        // right is less than the pivot value
        while (arr[j] > pivot) {
            j--
            comparisonsNumber1++;
        }

        // If the left pointer is less than or equal to the 
        // right pointer, then swap values
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]] // ES6 destructuring swap
            i++
            j--
            swapNumber1++;
        }
    }

    return i

}

quickSort = (arr, left = 0, right = arr.length - 1) => {

    let len = arr.length,
        index

    if (len > 1) {

        index = partition(arr, left, right)

        if (left < index - 1) {
            quickSort(arr, left, index - 1)
        }

        if (index < right) {
            quickSort(arr, index, right)
        }

    } 
 
    return arr
    
}



linearSearch = (value, list) => {
    let found = false;
    let position = -1;
    let index = 0;

    while (!found && index < list.length) {
        if (list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }

    return position;
}

binarySearch = (value, list) => {

    let first = 0; //left endpoint
    let last = list.length - 1; //right endpoint
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) { //if in lower half
            last = middle - 1;
        } else { //in in upper half
            first = middle + 1;
        }
    }
    return position;
}


const randomArray = generateRandomArray();

let arrayBubbleSort = bubbleSort(randomArray);

let arrayInsertionSort = insertionSort(randomArray);

console.log('Quick sort Algorithm ✰ \n');
let end1, start1;
start1 = new Date();

let arrayQuickSort = quickSort(randomArray);

end1 = new Date();
console.log('- Operation took ' + (end1.getTime() - start1.getTime()) / 1000 + ' secs');
console.log('- Number of comparisons done: ', comparisonsNumber1);
console.log('- Number of swap done: ', swapNumber1, '\n');



// Linear search 
let position1 = linearSearch(process.argv[5], arrayBubbleSort);
// Binary search
let position2 = binarySearch(process.argv[6], arrayBubbleSort);


console.log('Linear search  ✰ \n');
if(position1 < 0){
    console.log('The element did not found in the array :( \n')
} else {
    console.log('The first position of the element ', process.argv[5], 'is: ', position1, '\n')
}

console.log('Binary search  ✰ \n');
if(position2 < 0){
    console.log('The element did not found in the array :( \n')
} else {
    console.log('The first position of the element ', process.argv[6], 'is: ', position2, '\n')
}

