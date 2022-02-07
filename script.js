//---------------------->  Code signal 1

function solution(param1, param2) {
    return param1 + param2;
}

//------------------------> Code signal 2

const solution = year => Math.ceil(year / 100)


//------------------------> Code signal 3

function solution(inputString) {
    const inputString2 = inputString.split('');
    const inputString3 = inputString2.reverse();
    const inputString4 = inputString3.join('');
    return (inputString === inputString4);
}

//------------------------> Code signal 4

function solution(inputArray) {
    let max = inputArray[0] * inputArray[1]
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > max) {
            max = inputArray[i] * inputArray[i + 1]
        }
    }
    return max
}

//------------------------> Code signal 5

function solution(n) {
    let count = 1;
    for (let i = 1; i < n; i++) {
        count += 4 * i;
    }
    return count
}

//------------------------> Code signal 6

function solution(statues) {
    statues.sort((a, b) => {
        return a - b
    });
    const min = statues[0];
    const max = statues[statues.length - 1];
    let count = 0;
    for (let i = min; i < max; i++) {
        if (statues.indexOf(i) === -1) {
            count++;
        }
    }
    return count
}
solution([6, 2, 3, 8])

//------------------------> Code signal 7

function solution(sequence) {
    let count = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    return count <= 1
}
solution([1, 3, 2, 1])

//------------------------> Code signal 9

function solution(inputArray) {
    let max = inputArray[0].length
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i].length > max) {
            max = inputArray[i].length
        }
    }
    inputArray = inputArray.filter((item) => {
        return item.length === max;
    });
    console.log(inputArray)
}
solution(["aba", "aa", "ad", "vcd", "aba"])