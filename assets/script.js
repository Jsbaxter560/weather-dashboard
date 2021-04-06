var search=document.getElementById("textarea");

document.addEventListener("click", function () {
    localStorage.setItem;
    console.log("click");
})

fetch(https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={6167fdca66a105a7351aa83a0bf9614a})
    .then(response => response.json())
    .then(data => console.log(data));




// add 3 divs to the body of html to accept dynamic instructions from source files
// with classes and id's 
// so that window can display dynamically generated info

// div1 contains a field requesting city name and submit button, as well as an empty column in which to store recents searches
// text area captures city name value and button submits
// to gain data from user with which to initiate search and then store that data on local storage displayed as recent searches

// div2 is empty container in which response from querry is to be placed
// with classes and/or ids to identify their location on document and jquerry
// to provide user with requested information

// div3 is empty container in which response from querry is to be placed
// with classes and/or ids to identify their location on document and jquerry
// to provide user with requested information

// each div will be formatted and made dynamic with js framework other than bootstrap
// this is to be determined
// because I'm not quite there just yet

// when user inputs desired location, click initiates jquerry request 
// with pertinent API tool(?)
// to capture data from jquerry request and display it in div1 and div2

// when user inputs location, it is stored on a list for future reference below the search field
// apply info to local storage and display as a row benath field in div1
// for user to reference previous searches
