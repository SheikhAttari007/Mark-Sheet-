var stdName = prompt("Enter Your Name","Haseeb");
var engMarks = +prompt("Enter English Marks");
var sciMarks = +prompt("Enter Science Marks");
var urduMarks = +prompt("Enter Urdu Marks");
var comMarks = +prompt("Enter Computer Marks");
var islMarks = +prompt("Enter Islamiat Marks");
var total = engMarks + sciMarks + urduMarks + comMarks + islMarks;
var percentage = (total / 500)*100
document.write(stdName+ "<br />"+"<br />");
document.write("Total Marks  "+total+"    "+ "Percentage   "+percentage);