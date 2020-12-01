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

sizer()
