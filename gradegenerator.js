// Challenge 1: Student Grade Generator
// Prompts the user for marks and outputs the grade

function generateGrade(marks) {
  if (marks > 100 || marks < 0) {
    return "Invalid marks! Enter a value between 0 and 100.";
    //The marks must be between 0 and 100
  } else if (marks > 79) {
    //the marks in this input should be above 79 to output grade A
    return "Grade: A";
  } else if (marks >= 60) {
    //the marks should be greater or equals to 60
    return "Grade: B";
  } else if (marks >= 49) {
    //the marks should be greater or equals to 49
    return "Grade: C";
  } else if (marks >= 40) {
    //the marks should be greater or equals to 40
    return "Grade: D";
  } else {
    return "Grade: E";
    //if none of the above conditions is met it should output an E
  }
 
}
 console.log(generateGrade(85)); // Outputs: the grade at within the marks range