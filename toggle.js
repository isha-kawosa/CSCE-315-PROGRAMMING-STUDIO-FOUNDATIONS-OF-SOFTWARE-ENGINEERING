function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var element = document.getElementById("firstsheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currentstyle= element.getAttribute("href");
    var newstyle=" ";
    if(currentstyle== "landingstyle.css"){
        element.setAttribute("href", "secondstyle.css")
        newstyle= "secondstyle.css";
    }
    else{
        element.setAttribute("href", "landingstyle.css")
        newstyle= "landingstyle.css";
    }

    // 1 (c) Determine new stylesheet file name

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("newstyle", newstyle)
    // Toggle the 'toggled' class to change the button's appearance
    var styleToggle = document.getElementById('theme-toggle');
    styleToggle.classList.toggle('toggled');
    // document.body.classList.toggle('dark');
    // document.body.classList.toggle('light');
    if (styleToggle.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    
    var style= localStorage.getItem("newstyle");
    var element = document.getElementById("firstsheet");
    element.setAttribute("href", style)
    // 2 (b) get html style element by ID


    // 2 (c) replace href attribute of html element.
    var theme = localStorage.getItem("theme");
    var themeToggle = document.getElementById('theme-toggle');

    if (theme === "dark") {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }
}