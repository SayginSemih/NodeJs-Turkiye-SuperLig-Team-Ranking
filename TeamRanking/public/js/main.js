let matchs = document.querySelectorAll(".matches");
let teams = document.querySelectorAll(".team_list th");

teams.forEach(i => {
    if (i.textContent==1) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: aqua")
    }
    if (i.textContent==2) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: aqua")
    }
    if (i.textContent==3) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: orange")
    }
    if (i.textContent==4) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: green")
    }
    if (i.textContent==17) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: red")
    }
    if (i.textContent==18) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: red")
    }
    if (i.textContent==19) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: red")
    }
    if (i.textContent==20) 
    {
        i.parentElement.children[0].setAttribute("style", "background-color: red")
    }
})

matchs.forEach(i => {
    if (i.textContent=="G") i.setAttribute("style", "background-color: green")
    else if (i.textContent=="B") i.setAttribute("style", "background-color: gray")
    else i.setAttribute("style", "background-color: red")
})
