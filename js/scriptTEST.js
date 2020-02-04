/*******************************************************
        Full Stack JavaScript
        Project unit 2: List Pagination and Filtering
        by Eric E.

        "Thanks for reviewing my code. I am going for
        an "Exceeds Expectations" grade. Please
        reject my project if it doesn't meet the
        requirements."
********************************************************/


//Declaring the neccessary public variables

var studentArr = document.querySelectorAll('.student-item');
let studentList = document.getElementsByClassName('student-list')[0].children;
const numberOfItems = 10;
const p = document.getElementsByClassName('page')[0].appendChild(document.createElement('p'));
var newArrayA = [];


//The showPage() function which takes a list (of students) and
//an integer to project the correct amount of students (equal to numberOfItems)
//for the selected page. Also added a paragraph which displays if a search
//results in zero.

const showPage = (list, page) => {
  const firstIndex = (page * numberOfItems) - numberOfItems;
  const secondIndex = page * numberOfItems;
  let newArrayList = [];
  if(list.length == 0) {
    p.style.display = 'block';
    p.textContent = "No results found.";
  } else {
    p.style.display = 'none';
    for(let i = 0; i < list.length; i++) {
      if((i >= firstIndex) && (i < secondIndex)) {
        list[i].style.display = 'block';
      }
      else {
        list[i].style.display = 'none';
      }
    }
  }
}

//The appendPageLinks() function which takes a list (of students) to calculate
//the amount of needed anchor tags, makes the tags interactive
//(by adding EventListeners) and displays them on the webpage.

const appendPageLinks = (list) => {
  if(document.getElementById('pagination-id')) {
    document.getElementById('pagination-id').remove();
  }
  const maxPages = (list.length) / numberOfItems;
  const page = document.querySelectorAll('.page')[0];
  const pageDiv = document.createElement('div');
  pageDiv.className = "pagination";
  pageDiv.id = "pagination-id";
  page.appendChild(pageDiv);
  const ul = document.createElement('ul');
  pageDiv.appendChild(ul);
  for(let i = 0; i <= maxPages; i++) {
    ul.appendChild(document.createElement('li'));
    const a = ul.childNodes[i].appendChild(document.createElement('a'));
    a.setAttribute('href', '#');
    a.textContent = i + 1;
    const anchorArray = document.getElementsByTagName('A');
    anchorArray[0].className = 'active';

    a.addEventListener('click', (e) => {
      if(e.target.tagName == 'A') {
        for(let i = 0; i < anchorArray.length; i++) {
          anchorArray[i].className = '';
        }
        e.target.className = 'active';
        showPage(list, i + 1);
      }
    });
  }
}

//The searchBar() function which takes a list (of students), compares the
//search field with the names of the students in the list and creates a new list
//which is then being used in the same function by calling the showPage() and
//appendPageLinks() function using that new-formed list.

function searchBar(list) {
  const searchDiv = document.getElementsByClassName('page-header cf')[0].appendChild(document.createElement('div'));
  searchDiv.className = 'student-search';
  const searchInput = searchDiv.appendChild(document.createElement('input'));
  searchInput.setAttribute('placeholder', 'Search for students...');
  const searchButton = searchDiv.appendChild(document.createElement('button'));
  searchButton.textContent = "Search";

  searchButton.addEventListener('click', (e) => {
    const newList = [];
    for(let i = 0; i < list.length; i++) {
      if((searchInput.value.length != 0) && (list[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase()))) {
        newList.push(list[i]);
      } else {
        list[i].style.display = 'none';
      }
    }
    //console.log(newList);
    showPage(newList, 1);
    appendPageLinks(newList);
  });
}


//Calling the neccessary functions

searchBar(studentList);
appendPageLinks(studentList);
showPage(studentList, 1);
