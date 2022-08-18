// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// //My solution
// const rps = (p1, p2) => {
//     let rules = {rock:'paper', paper:'scissors', scissors:'rock'}
//     if(p1==p2){
//       return 'Draw!'
//     }else if(p1==rules[p2]){
//       return "Player 1 won!"
//     }else{
//       return "Player 2 won!"
//     }
//   };

// DESCRIPTION:
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

////My solution
// function points(games) {
//     let points=0
//     games.forEach(element=>{
//       if(element[0]>element[2]){
//         points+=3
//       }else if(element[0]==element[2]){
//         points+=1
//       }
//     })
//     return points
//   }