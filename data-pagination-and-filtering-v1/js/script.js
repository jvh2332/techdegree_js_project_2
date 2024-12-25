/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//This code will show a structured list of students with pagination buttons 

//This function creates and appends the elements needed to display a "page" of nine students

const studentList = document.querySelector(".student-list");
const paginationList = document.querySelector(".link-list");
const studentsPerPage = 9;

function showPage (array, page){
   const firstStudentOfPage = page * studentsPerPage - studentsPerPage;
   const lastStudentOfPage = page * studentsPerPage - 1;
   studentList.innerHTML = ""; //setting the html content to an empty string to remove any students that might have previously been displayed
   
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

//This function will be responsible for rendering the pagination buttons to the page

function addPagination (array){
   const numberOfButtons = Math.ceil(array.length/studentsPerPage);
   paginationList.innerHTML = ""; //setting the html content to an empty string remove any pagination buttons that might have previously been displayed

   for (let i = 1; i <= numberOfButtons; i++){ //starting with i = 1 since we do not want a pagination button with number 0
      const html = `
      li>
      <button type="button">${i}</button>
      </li>
      `;
      paginationList.insertAdjacentHTML ("beforeend", html);
      paginationList.querySelector("button").classList.add("active");
   }
   
}

paginationList.addEventListener ("click", (e) => {
   
});

/*
Create an event listener to listen for clicks on the .link-list element.

Inside this event listener:

Create a conditional that checks if the clicked element is a <button>. This will ensure that the function will only be called if one of the buttons is clicked. If the conditional evaluates to be true:
Remove the active class from any other pagination button.
Add the active class to the button that was just clicked.
Call the showPage function and pass it the list and page number to display.
*/


// Call functions
showPage (data, 1);
addPagination(data);
