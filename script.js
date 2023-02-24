//always hungry
function hungry(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            temp.push("yummy");
        }
    }
    if (temp.length > 0) {
        console.log(temp.toString());
    }
    else {
        console.log("I'm hungry");
    }
}

//highpass filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

//better than average
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    avg = sum / arr.length;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++
        }
    }

    return count
}

//array reverse
function reverse(arr) {
    var empty = [];

    for (var i = arr.length - 1; i >= 0; i --) {
        empty.push(arr[i]);
    }

    return empty;
}

//fibonacci array
function fibonacciArray(n) {
    var fibArr = [0,1];

    while(fibArr.length < n) {
        var fibNew = fibArr[i] + fibArr[i + 1];
        fibArr.push(fibNew);
        i++;
    }

    return fibArr;
}
