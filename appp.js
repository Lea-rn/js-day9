// //// correction coding challenge# (fandamental part 2 ) : 

// ///1 

// const markObj = {
//     firstName: "Mark",
//     lastName: "Miller", 
//     mass : 78 , 
//     height : 1.69 ,
//     calcBMI : function(){
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// }


// console.log(markObj)



// const jhonObj = {
//     firstName: "jhon",
//     lastName: "Smith", 
//     mass : 92 , 
//     height : 1.95 ,
//     calcBMI : function(){
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }  


// }



// console.log("mark : " , markObj.calcBMI())
// console.log("jhon : " , jhonObj.calcBMI())



// // console.log("test : " , markObj.BMI)
// // console.log("test : " , jhonObj.BMI)


// if (jhonObj.BMI > markObj.BMI) {
//  console.log(`jhon's Bmi ${jhonObj.calcBMI()} is higher than mark BMI ${markObj.calcBMI()}`)
// }
// else {
//     console.log(`mark's Bmi ${markObj.calcBMI()} is higher than jhon BMI ${jhonObj.calcBMI()}`)
// }



///////////////////////////////////// loop ///////////////////////////////////////////////////////////////////////


////// dry (d'ont repeat your self )


// console.log(`lifting weights repetition 1 🏋️‍♂️`)
// console.log(`lifting weights repetition 2 🏋️‍♂️`)
// console.log(`lifting weights repetition 3 🏋️‍♂️`)
// console.log(`lifting weights repetition 4 🏋️‍♂️`)
// console.log(`lifting weights repetition 5 🏋️‍♂️`)
// console.log(`lifting weights repetition 6 🏋️‍♂️`)
// console.log(`lifting weights repetition 7 🏋️‍♂️`)
// console.log(`lifting weights repetition 8 🏋️‍♂️`)
// console.log(`lifting weights repetition 9 🏋️‍♂️`)
// console.log(`lifting weights repetition 10 🏋️‍♂️`)


// for (let rep = 1 ; rep <=10 ; rep++ ) { 

//     console.log(`lifting weights repetition ${rep} 🏋️‍♂️`)
// }


// const lucasArray = [
//     "lucas" ,
//     "smith" ,
//      2024 - 1990 , 
//      "teacher" ,
//       ["steven" ,"peter" ,"mark"] , 
//       "ay haja" , 
//       "hhhhh"
//     ]


    // console.log(lucasArray[0])
    // console.log(lucasArray[1])
    // console.log(lucasArray[2])
    // console.log(lucasArray[3])
    // console.log(lucasArray[4])

 
    // for (let i = 0 ; i < lucasArray.length ; i++  ) {
    //   console.log(lucasArray[i] ,":", typeof lucasArray[i])
    // }

    // const lucasArray = [
    // "lucas" ,
    // "smith" ,
    //  2024 - 1990 , 
    //  "teacher" ,
    //   ["steven" ,"peter" ,"mark"] , 
    //   "ay haja" , 
    //      true
    // ]

    // const types = [] ; 

    //    for (let i = 0 ; i < lucasArray.length ; i++  ) {

    //     /// filling types array : 
    //     // types[i] = typeof lucasArray[i]
    //     types.push(typeof lucasArray[i])
    // }

    // console.log(types)






    // const years = [1991 , 2007 , 1969 , 2020 ]
    // const age = []
    
    // function calcAge (year) {
    //     return 2024 - year
    // }

    // age.push(calcAge(years[0]))
    // age.push(calcAge(years[1]))
    // age.push(calcAge(years[2]))
    // age.push(calcAge(years[3]))

    // console.log(age)

    // for (let i = 0 ; i<years.length ; i++) {
    //   age.push(2024-years[i])
    // }

    // console.log(age)



    ////// continue and break (keywords)  :::  

       
    
    
    // const lucasArray = [
    // "lucas" ,
    // "smith" ,
    //  2024 - 1990 , 
    //  "teacher" ,
    //   ["steven" ,"peter" ,"mark"] , 
    //   "ay haja" , 
    //      true
    // ]


    // for (let i = 0 ; i<lucasArray.length ; i++) {
    //   console.log(lucasArray[i] ,':'  , typeof lucasArray[i])
    // }



    // console.log("----------------------only strings -------------------------------------")


    // for(let i = 0 ; i<lucasArray.length ; i++) {
    //    if (typeof lucasArray[i]!=="string") continue ;
       
       

    //   console.log(lucasArray[i] ,':'  , typeof lucasArray[i])

    // } 

    // const lucasArray = [
    //     "lucas" ,
    //     "smith" ,
    //      2024 - 1990 , 
    //      "teacher" ,
    //       ["steven" ,"peter" ,"mark"] , 
    //       "ay haja" , 
    //          true
    //     ]

    //         console.log("-------------------- break with number -------------------------------------")

    //     for (let i = 0 ; i<lucasArray.length ; i ++ ){
    
    //        if (typeof lucasArray[i] === "number") break ;   
    //        console.log(lucasArray[i] , ":" , typeof lucasArray[i])         
    //     }


    // const numbers = [1,2,3,4]

    // /// 4 , 3 , 2 ,  1
    
    // for (let i = numbers.length-1 ; i >= 0 ; i--) {
    //   console.log(numbers[i])
    // }

    
    /////////  loop inside onother loop ///  


    //   for (let rep = 1 ; rep < 11 ; rep ++ ){
    //       console.log(`lifting weight repetion ${rep} 🏋️‍♂️`)
    //   }

    // for (let exercice = 1 ; exercice <6 ; exercice++){


    //     console.log(`---starting exercice ${exercice}`)


    //     for (let rep = 1 ; rep <11 ; rep ++){
    //         console.log(`exercice ${exercice} : lifting weight repetion ${rep} 🏋️‍♂️ `)
    //     }
    // }


    ////// while loop :::::

      //   for (let rep = 1 ; rep < 11 ; rep ++ ){
    //       console.log(`lifting weight repetion ${rep} 🏋️‍♂️`)
    //   }

    // let rep = 1 ; 

    // while (rep<11){
  
    //     console.log(`while : lifting weight repetion ${rep} 🏋️‍♂️`)
    //     rep ++ ;
    //     // rep = rep +1 
    // }


  //   let dice = Math.trunc((Math.random()*6)+1)


  //   while (dice !== 6 ){
  //   console.log(`you rolled a ${dice}`)
  //   dice = Math.trunc((Math.random()*6)+1)
  //   if (dice === 6 ){
  //  console.log("you win !!! ")
  //   }
  //   }


  