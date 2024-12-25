/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const studentList = document.querySelector(".student_list");
const studentsPerPage = 9;

function showPage (array, page){
   const firstStudentOfPage = page * studentsPerPage - studentsPerPage;
   const lastStudentOfPage = page * studentsPerPage - 1;
   studentList.innerHTML = "";
   
   for (let i=0; i < array.length; i++){
      if (i >= firstStudentOfPage && i <= lastStudentOfPage) {
         const student = array[i];
         const html = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
           <h3>${student.name.first} ${student.name.last}</h3>
           <span class="email">${student.email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${student.registered.date}</span>
         </div>
       </li>
         `;
        studentList.insertAdjacentHTML("beforeend", html);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage (data, 1);