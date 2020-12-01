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

teamMembers()



















