document.getElementById("nameOne").innerHTML = "Kalyn";
document.getElementById("nameTwo").innerHTML = "Irma";
let logo = document.getElementById('logo')


const sizer = () => {

let response = prompt("Please enter the value 'small' or 'large'")
console.log(response)
console.log(document.getElementById('logo'))

if (response == "small") {
    document.getElementById('logo').width=400
    document.getElementById('logo').height=250
}
 else if (response == "large") {
    document.getElementById('logo').width=800
    document.getElementById('logo').height=500
} else {
    alert("Please refresh and enter 'small' or 'large'")
}
}

// sizer()

const background = () => {

    let bgcolor = prompt ("Enter a color for the background.")
    document.body.style.backgroundColor = bgcolor;

}

// background()

const teamMembers = () => {

    teamMemNum = prompt("How many team members do you have?")
    parseInt(teamMemNum)
    let teamList = []

    for (let i = 0; i < teamMemNum; i++) {
        let memName = prompt("Please enter a member's name")
        teamList.push(memName)
    }
  
    console.log(teamList)

}

const userNamePrompt = () => {

let userNameInput = prompt('Please enter your name')

let mainDiv = document.getElementById('mainDiv')
let userName = document.createElement('h1')
let userNameText = document.createTextNode(userNameInput + "'s" + " Resume!")



userName.appendChild(userNameText)
mainDiv.appendChild(userName)
}

// userNamePrompt()

let skills = ["JS", "Python", "CSS", "HTML"]

const arrayOrder = () => {
    let userInput = prompt("Please enter ordered or unordered.")
    let mainDiv = document.getElementById('mainDiv')
    let orderedList = document.createElement("ol")
    let unorderedList = document.createElement("ul")
    let listItems = document.createElement("li")
    let skillsText = document.createTextNode(skills)
   
    if (userInput.toLowerCase() == "ordered"){
        listItems.appendChild(skillsText)
        orderedList.appendChild(listItems)
        mainDiv.appendChild(orderedList)
    } else if (userInput.toLowerCase() == "unordered"){
        listItems.appendChild(skillsText)
        unorderedList.appendChild(listItems)
        mainDiv.appendChild(unorderedList)
    } else {
        alert("Please refresh and correct your response.")
    }

}

// arrayOrder()


function getNumber(){
    return 7
    alert(8)
    return 9
}
// let num = getNumber()
let mainDiv = document.getElementById("mainDiv")
let button = document.createElement("button");
let buttonText = document.createTextNode("press here")

button.appendChild(buttonText)
mainDiv.appendChild(button)
button.addEventListener('click',colorChange) 
 function colorChange() {
    if (document.body.style.backgroundColor != "cyan") {
        document.body.style.backgroundColor = "cyan"; 
    } else {
    document.body.style.backgroundColor = "salmon";
}
}














