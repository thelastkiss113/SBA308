// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);

  //Console Output : js:101
//   [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94,    // 47 / 50
//       2: 1.0      // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82,  // (39 + 125) / (50 + 150)
//       1: 0.78,    // 39 / 50
//       2: 0.833    // late: (140 - 15) / 150
//     }
//   ]
  
//Checklist #1 
//*1. Match AssignmentGroup to CourseInfo.id = completed: function assignmentGroupMatch
//*2. Throw Error : completed: try/catch = Test function
// 3. Account for errors in data (points posssible=0? Value is a # instead of string?)
// 4. Use try/catch and other logic to handle errors
// 5. Assignment not due yet then do not include it in results or average. (create a loop) If learner's assignment is late then deduct 10% in points.
// 6. Create a function named getLearnerData() that accepts these values as parameters in order listed: (CourseInfo,AssignmentGroup,[LearnerSubmission]), and returns formatted result which should be an array of objects as desribed above.
// 7. Use helper functions as you see fit.  Helper function = a function within another function


// #1 & #2
// Function: make sure AssignmentGroup.course_id matches CourseInfo.id ==> if it doesn't throw error
function assignmentGroupMatch(course, AssignmentGroup) {
if (AssignmentGroup.course_id !== course.id) {
    throw new Error("Assignment group does not match course");
  } else {
    console.log("Assignment group valid");
  }
}

// Test the function
try {
    assignmentGroupMatch(CourseInfo, AssignmentGroup); 
  } catch (error) {
    console.error(error.message);
  }
  //console Output : Assignment group valid. js:125



// # 3. create loop to validate AssignmentGroup.assignments points = put in function

function searchAssignments(assignments) {
    const validate = [];
    let i = 0;

    while (i < assignments.length) {
        const assigmnet = assignments[i];

        if (assignments.points_possible <=0) {
            throw new Error(`Assignment not valid: ${assignment.id}`);
        }

        //
    }
}






//Checklist #2
// Declare variables properly using let and const where appropriate.
// Use operators to perform calculations on variables and literals.
// Use strings, numbers, and Boolean values cached within variables.
// Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
// Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
// Utilize at least two different types of loops.
// Utilize at least one loop control keyword such as break or continue.
// Create and/or manipulate arrays and objects.
// Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
// Use functions to handle repeated tasks.
// Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// Commit frequently to the git repository.
// Include a README file that contains a description of your application.