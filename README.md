
Author: Nova Wolta
Purpose: Week 2 lesson for the COMP002 Course.

# Week 2 guided practice


Use the Week 2 Canvas lesson and assignment. Open index.html in a browser; inspect the console. For storage work, serve this folder through VS Code Live Server or an equivalent local HTTP server so origin behavior is predictable. Fill TODOs in main.js, record predictions/results in this file, and make meaningful commits.

Observations: Console.log returns pointing to the js file in the root folder, there is a log reading "undefined" 

| Action/input | Expected | Actual | Fix/notes |

|const called in a console.log|caffeinated: true|caffeinated: true| note: just extra testing of the js file

|'let' '+7" then a Boolean 'let==17' and a 'if' 'return'| |True, 17 minutes, Practice Complete|Uncaught SyntaxError: Illegal return statement| not fully understanding "return" trying to have it state something by just writing text in it; removed the 'if, return' issue with lacking a console log for the Boolean causing a respone in the log of only the practiceMinutes after +7, this line only gets added to the 10 causing it to read in log as 107, after adding the console.log to the Boolean it reads false because of the adding 7 to the end of 10.

|trying to run a if else for practice minutes >= 17 calling a let that = practice complete or displaying a log of practice incomplete| "practice complete" "17 minutes"| Uncaught TypeError: practice is not a function| ended up trying to call let = practice as a function. [practice()]|

|added a function for practice and now am going to call for a function that'll run console logs based off of booleans with a if else| "17 minutes" "Practice Complete!"| "17 minutes" "Practice Complete!"| got what I had wanted to happen by switching to a function though through my understanding I'm still lacking a 'string' for the assignment|

|running a cosnt with a string to met needing assignment standards| "17 minutes" "{Completion: Practice Complete}"|"17 minutes" "{Completion: Practice Complete}"

Explain why the changing binding uses let... "let is a variable declartion that can be reassigned a new value."

3. "Preict and run the four conversion calls..."

console.log(typeof '5');

|5|string|typeof reads the literal 'value type' in a string.|

console.log('5' + 2);

|52|52|string|

console.log(Number('5') + 2);

|7|7|number|

console.log(Number(''));

|0|0|number|

----------------

console.log(5 * 5);

|25|25|number|

console.log(20 >= Number('21'));

|false|false|

console.log(Boolean('true'));

|false|true|came back true because its a true Boolean same as if it read Boolean('false')|

"Identify a statement containing an experssion"

if (practiceMinutes >= 17) 

|the statement, 'if' contains the experssion for the variable practiceMinutes 
