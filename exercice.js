// #1 — Print the numbers from 0 to 15
//// answer :: 
//    for (let i = 0 ; i<16 ; i++) {
//     console.log(i)
//    }
   
// #2 — Print the numbers from 12 to 24

/// answer  ::: 
// for (let i = 12 ; i<25 ; i++) {
//         console.log(i)
//       }

// #3 — Print the ODD numbers from 7 to 31
/// answer :: 
    //  for (i = 7 ; i<32 ;  i++ ){
    //      if (i % 2 !== 0){
    //       console.log(i)
    //      }
    //  }

// #4 — Print the EVEN numbers from 10 to -20 : 
/// answer :: 

// for(i=10 ; i>-21 ; i--){
//     if (i%2 === 0) {
//         console.log(i)
//     }
// } 




// #5 — Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
/// answer  ::: 
// for(i = 1 ; i<46 ; i++){
//     if(i%3 === 0 ){
//      console.log(i,"Fizz")
//     }
//      if (i%5 === 0 ){
//         console.log(i,"Buzz")
//     }
//      if (i%3 === 0 && i%5 === 0 ){
//         console.log(i,"FizzBuzz")
//     }
    
// }



// #6 — Print all the elements of the following array
/// answer :: 
// var thisIsAnArray = ["element1", "element2", "element3", "element4"];
// for (i = 0 ; i<thisIsAnArray.length ; i++){
//     console.log(thisIsAnArray[i])
// }



// #7 — Calculate the sum of all the numbers in the following array
// var numbersArray = [1,13,22,123,49]

// function calcSum (arr){
//     let sum = 0 ; 
//     for (let i = 0 ; i<arr.length ; i++){

//         sum += numbersArray[i]
//     }
//     return sum ; 
// }

// console.log(calcSum(numbersArray))




////// coding challenge 4 (loops ) : 

const bills = [22,295,176,440,37,105,10,1100,86,52] ; 
const tips = [] ; 
const totals = [] ; 

function calcTip(bill){
if (bill>=50 && bill<=300 ){
    return bill * 0.15
}
else {
    return bill * 0.2
}
}


for (i = 0 ; i<bills.length ; i++ ){   //// i = 0  /// i === 1 
 tips.push(calcTip(bills[i]))


    totals.push(tips[i]+bills[i])
//  totals.push(calcTip(bills[i])+bills[i])
}


console.log(bills,tips ,totals)



const calcAvearge = function (arr){
  let sum = 0 ; 
  for (let i = 0 ; i<arr.length ; i++){
    sum += arr[i]
  }
   
let average =   sum / arr.length 
return average ;

}

const test = [1,2,12]

console.log(calcAvearge(bills) , calcAvearge(tips) , calcAvearge(totals) )