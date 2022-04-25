const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes);
reverseArray(primes);
printArray(primes);//19, 17, 13, 11, 7, 5, 3, 2
let index = search(13, primes);
console.log(index); //2
index = search(1, primes);
console.log(index); //-1

function reverseArray(arr) {
    let save_num
    for (let i = 0; i < arr.length/2; i++)
    {
        save_num = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = save_num
        //console.log(arr[i]);
    }

}

function search(item, arr) {

    for(i in arr){
        if(arr[i] === item)
        return i
    }

    return -1
}

function printArray(arr){
    console.log('=====================');
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('=====================');
}