// // DESCRIPTION:
// // Rock Paper Scissors
// // Let's play! You have to return which player won! In case of a draw return Draw!.

// // Examples(Input1, Input2 --> Output):

// // "scissors", "paper" --> "Player 1 won!"
// // "scissors", "rock" --> "Player 2 won!"
// // "paper", "paper" --> "Draw!"

// // //My solution
// // const rps = (p1, p2) => {
// //     let rules = {rock:'paper', paper:'scissors', scissors:'rock'}
// //     if(p1==p2){
// //       return 'Draw!'
// //     }else if(p1==rules[p2]){
// //       return "Player 1 won!"
// //     }else{
// //       return "Player 2 won!"
// //     }
// //   };

// // DESCRIPTION:
// // Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// // For example: ["3:1", "2:2", "0:1", ...]

// // Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// // if x > y: 3 points
// // if x < y: 0 point
// // if x = y: 1 point
// // Notes:

// // there are 10 matches in the championship
// // 0 <= x <= 4
// // 0 <= y <= 4

// ////My solution
// // function points(games) {
// //     let points=0
// //     games.forEach(element=>{
// //       if(element[0]>element[2]){
// //         points+=3
// //       }else if(element[0]==element[2]){
// //         points+=1
// //       }
// //     })
// //     return points
// //   }

// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// //My solution
// function greet (name, owner) {
//     return name == owner ? 'Hello boss':'Hello guest'
// }

// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.  
// //My solution
// function arrayPlusArray(arr1, arr2) {
//     const arr3 = arr1.concat(arr2)
//     return arr3.reduce((a,b)=>a+b)
//   }

//   DESCRIPTION:
//   You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
  
//   As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
  
//   For example(Input --> Output):
  
//   10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    1 --> [1]
// //My solution
// function monkeyCount(n) {
// let arr = []
// for(let i=1;i<=n;i++){
//     arr.push(i)
// }
// return arr
// }