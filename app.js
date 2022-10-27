//adding original text
let originalStory = 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'

let userInputs = [] //array for storing the inputs
numberOfQuestions = 3; //total number of promps that will appear
questions = ["Enter a verb ", "Enter a noun ", "Enter an adjective "]
for (question of questions){
    let input = prompt(question)
    userInputs.push(input)
}
let StoryWithInput = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`
console.log(userInputs)
console.log(StoryWithInput)