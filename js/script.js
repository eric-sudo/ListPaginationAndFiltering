/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

var studentArr = document.querySelectorAll('.student-item');
let studentList = document.getElementsByClassName('student-list')[0].children;
const numberOfItems = 10;
var newArrayA = [];

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

const showPage = (list, page) => {
  const firstIndex = (page * numberOfItems) - numberOfItems;
  const secondIndex = page * numberOfItems;
  let newArrayList = [];
  for(let i = 0; i < list.length; i++) {
    if((i >= firstIndex) && (i < secondIndex)) {
      list[i].style.display = 'block';
    }
    else {
      list[i].style.display = 'none';
    }
  }
}


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  const maxPages = (list.length + 1) / numberOfItems;
  const pageDiv = document.createElement('div');
  pageDiv.className = 'pagination';
  var pageClass = document.getElementsByClassName('page')[0];
  pageClass.appendChild(pageDiv);
  const linkDivUL = document.createElement('ul');
  pageDiv.appendChild(linkDivUL);

  for(let i = 0; i <= maxPages; i++) {
    linkDivUL.appendChild(document.createElement('li'));
    let a = linkDivUL.childNodes[i].appendChild(document.createElement('a'));
    a.setAttribute('href', '#');
    a.textContent = i + 1;
    //linkDivUL.childNodes[i].appendChild(a);
    newArrayA.push(a);
    //a.classList.remove('active');
    // var anchor = [];
    // anchor = document.querySelectorAll('a');
    a.addEventListener('click', (e) => {
      if(e.target.tagName == 'a') {
        for(var l; l < linkDivUL.childNodes.length; l++){
          linkDivUL.childNodes[l].className.remove('active');
        }
        showPage(list, i + 1);
        e.target.className += 'active';
      }
  });
}


  // for(let i = 0; i <= maxPages; i++) {
  //   var a = [];
  //   a.push(document.createElement("a"));
  //   a[i].setAttribute('href', '#');
  //   linkDivUL.appendChild(document.createElement('li'));
  //   a[i].textContent = i + 1;
  //   a[i].addEventListener('click', (e) => {
  //     if(e.target.tagName = 'a') {
  //       for(let u = 0; u < a.length; u++) {
  //         a[u].className.remove('active');
  //       }
  //       showPage(list, i + 1);
  //       e.target.className += 'active';
  //     }
  //   });
  //   linkDivUL.childNodes[i].appendChild(a[i]);
  // }
//   return Math.ceil(maxPages);
// }

appendPageLinks(studentList);








// Remember to delete the comments that came with this file, and replace them with your own code comments.
