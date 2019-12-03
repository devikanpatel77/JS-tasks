const createAccount = document.getElementById("createAccount")
createAccount.addEventListener('click', addForm)

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")

const form = document.createElement("form")

const h3 = document.createElement("h3")

const input1 = document.createElement("input")
const input2 = document.createElement("input")
const input3 = document.createElement("input")


const label1 = document.createElement("label")
const label2 = document.createElement("label")
const label3 = document.createElement("label")

const button1 = document.createElement("button")

const button = document.createElement("button")

const pTag1 = document.createElement("p")
const pTag2 = document.createElement("p")
const pTag3 = document.createElement("p")

const checkBox = document.createElement("input")

div1.classList = "col-md-8 col-sm-12 offset-2 card card-body mt-5 mb-5"
div2.classList = "form-group"
div3.classList = "offset-5 mt-3"
form.addEventListener('submit', validateForm)

form.name = "form"
button.id = "login"
button.type = "submit"
button1.type = "button"

checkBox.type = "checkbox"
input1.classList = "form-control"
input2.classList = "form-control"
input3.classList = "form-control"

button.classList = "btn btn-success offset-8"

h3.textContent = "Creat Account Form"
label1.textContent = "Name:"
label2.textContent = "Mobileno.:"
label3.textContent = "Password:"
button.textContent = "CreateAccount"
button1.textContent = "ClearAll"


div1.appendChild(form)
form.appendChild(div2)
div2.appendChild(h3)
div2.appendChild(label1)
div2.appendChild(input1)
div2.appendChild(pTag1)
div2.appendChild(label2)
div2.appendChild(input2)
div2.appendChild(pTag2)
div2.appendChild(label3)
div2.appendChild(input3)
div2.appendChild(pTag3)
div2.appendChild(checkBox)

div2.appendChild(div3)

div3.appendChild(button)


function addForm() {
    id1.innerHTML = ""
    id1.appendChild(div1)
}





function validateForm() {
    if (input1.value.trim() === "" && input2.value.trim() === "" && input3.value.trim() === "") {
        input1.style.border = "1px solid red"
        pTag1.style.color = "red"
        pTag1.style.fontSize = "10px"
        pTag1.innerHTML = "Username is required"

        input2.style.border = "1px solid red"
        pTag2.style.color = "red"
        pTag2.style.fontSize = "10px"
        pTag2.innerHTML = "Mobno. is required"

        input3.style.border = "1px solid red"
        pTag3.style.color = "red"
        pTag3.style.fontSize = "10px"
        pTag3.innerHTML = "Password. is required"

        return false

    } if (input1.value.trim().length < 3) {
        input1.style.border = "1px solid red"
        pTag1.style.color = "red"
        pTag1.style.fontSize = "10px"
        pTag1.style.visibility = "visible"
        pTag1.innerHTML = "Name Character should more than 3"
        return false


    } if (input2.value.trim().length != 10 || input2.value.trim() < 0 || input2.value.trim().match(/[0-9]/g) === null ){
        if (input2.value.length != 10) {

            input2.style.border = "1px solid red"
            pTag2.style.color = "red"
            pTag2.style.fontSize = "10px"
            pTag2.style.visibility = "visible"
            pTag2.innerHTML = "mobile no. should be 10 no."

        } else {
            input2.style.border = "1px solid red"
            pTag2.style.color = "red"
            pTag2.style.fontSize = "10px"
            pTag2.style.visibility = "visible"
            pTag2.innerHTML = "mobile no. is invalid"

        }
        return false


    } if (input3.value.trim() === "") {
        input3.style.border = "1px solid red"
        pTag3.style.color = "red"
        pTag3.style.fontSize = "10px"
        pTag3.style.visibility = "visible"
        pTag3.innerHTML = "Password Character should more than 3"

        return false
    }

    if (input3.value.trim().match(/[a-z]/g) === null || input3.value.trim().match(/[A-Z]/g) === null || input3.value.trim().match(/[0-9]/g) === null || input3.value.trim().match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) === null) {
        input3.style.border = "1px solid red"
        pTag3.style.color = "red"
        pTag3.style.fontSize = "10px"
        pTag3.style.visibility = "visible"
        pTag3.innerHTML = "Password Character should contain atlest one lowercase,One UpperCase,One SpecialCharacter and One number"

        return false
    }
    addStorage()

}


checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
        input3.type = "password"
    } else {
        input3.type = "text"
    }
})

const table = document.createElement("table");
const tBody = document.createElement("tbody");
const thead = document.createElement("thead");

const tr1 = document.createElement("tr");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

th1.textContent = "Name"
th2.textContent = "Mob no."
th3.textContent = "Password"

button1.classList = "btn btn-dark  col-md-2 offset-9 md-5 mb-5 mt-5 mr-5 "

table.appendChild(thead)
thead.appendChild(tr1)


tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
table.classList = 'table container border offset-1 mt-5  col-md-6'

function addStorage() {
    let values = [input1.value, input2.value, input3.value]
    let i = localStorage.length + 1
    localStorage.setItem(`testKey${i}`, values);

}
function addRow() {
    for (let i = 0; i < localStorage.length; i++) {

        let test = localStorage.getItem(localStorage.key(i)).split(",")


        const tr2 = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");



        td1.textContent = test[0]
        td2.textContent = test[1]
        td3.textContent = test[2]

        table.appendChild(tBody)
        tBody.appendChild(tr2)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)


    }

}

addRow()

const showAccount = document.getElementById('showAccount')
showAccount.addEventListener("click", function () {
    
    id1.innerHTML = ""

    id1.appendChild(table)
    id1.appendChild(button1)
})



button1.addEventListener("click", function () {

    localStorage.clear()
    setInterval(function () {
        window.location.reload(1);
    }, 30);


})
