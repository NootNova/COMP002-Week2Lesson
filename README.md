Author: Nova Wolta
Purpose: Week 2 lesson for the COMP002 Course.


# Week 2 guided practice


Use the Week 2 Canvas lesson and assignment. Open index.html in a browser; inspect the console. For storage work, serve this folder through VS Code Live Server or an equivalent local HTTP server so origin behavior is predictable. Fill TODOs in main.js, record predictions/results in this file, and make meaningful commits.

Observations: Console.log returns pointing to the js file in the root folder, there is a log reading "undefined" 

| Action/input | Expected | Actual | Fix/notes |

|const called in a console.log|caffeinated: true|caffeinated: true| note: just extra testing of the js file

|'let' '+7" then a Boolean 'let==17' and a 'if' 'return'| |True, 17 minutes, Practice Complete|Uncaught SyntaxError: Illegal return statement| not fully understanding "return" trying to have it state something by just writing text in it; removed the 'if, return' issue with lacking a console log for the Boolean causing a respone in the log of only the practiceMinutes after +7, this line only gets added to the 10 causing it to read in log as 107, after adding the console.log to the Boolean it reads false because of the adding 7 to the end of 10.

|trying to run a if else for practice minutes >= 17 calling a let that = practice complete or displaying a log of practice incomplete| "practice complete" "17 minutes"| Uncaught TypeError: practice is not a function| ended up trying to call let = practice as a function. [practice()]|

|added a function for practice and now am going to call for a function that'll run console logs based off of boolens with a if else| "17 minutes" "Practice Complete!"| "17 minutes" "Practice Complete!"| got what I had wanted to happen by switching to a function though through my understanding I'm still lacking a 'string' for the assignment|
