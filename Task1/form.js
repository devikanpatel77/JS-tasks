
const useForm = document.forms['userForm']
const nameElement = userForm.uname
const ageElement = userForm.age
const emailElement = userForm.email
const mobnoElement = userForm.mobno


const name_msg = document.getElementById("name_msg")
const age_msg = document.getElementById("age_msg")
const email_msg = document.getElementById("email_msg")
const no_msg = document.getElementById("no_msg")



function Validate() {
    if (nameElement.value.trim() == "" && ageElement.value == "" && emailElement.value.trim() == "" && mobnoElement.value == "") {
        nameElement.style.border = "1px solid red"
        name_msg.style.color = "red"
        name_msg.style.fontSize = "10px"
        name_msg.innerHTML = "Username is required"

        ageElement.style.border = "1px solid red"
        age_msg.style.color = "red"
        age_msg.style.fontSize = "10px"
        age_msg.innerHTML = "age is required"

        emailElement.style.border = "1px solid red"
        email_msg.style.color = "red"
        email_msg.style.fontSize = "10px"
        email_msg.innerHTML = "email is required"

        mobnoElement.style.border = "1px solid red"
        mobno_msg.style.color = "red"
        mobno_msg.style.fontSize = "10px"
        mobno_msg.innerHTML = "mobno is required"
        return false
    }

    if (nameElement.value.trim() == "") {
        nameElement.style.border = "1px solid red"
        name_msg.style.color = "red"
        name_msg.style.fontSize = "10px"
        name_msg.textContent = "Username is required"

        return false
    }
    if (ageElement.value == "") {
        ageElement.style.border = "1px solid red"
        age_msg.style.color = "red"
        age_msg.style.fontSize = "10px"
        age_msg.innerHTML = "age is required"

        return false
    }
    if (emailElement.value.trim() == "") {
        emailElement.style.border = "1px solid red"
        email_msg.style.color = "red"
        email_msg.style.fontSize = "10px"
        email_msg.innerHTML = "email is required"
        return false
    }
    if (mobnoElement.value == "") {
        mobnoElement.style.border = "1px solid red"
        mobno_msg.style.color = "red"
        mobno_msg.style.fontSize = "10px"
        mobno_msg.innerHTML = "mobno is required"
        return false
    }
    if (nameElement.value.trim().length < 3) {
        nameElement.style.border = "1px solid red"
        name_msg.style.color = "red"
        name_msg.style.fontSize = "10px"
        name_msg.style.visibility = "visible"
        name_msg.innerHTML = "Name Character should more than 3"

        return false
    }
    if (ageElement.value > 140 || ageElement.value <= 0) {
        ageElement.style.border = "1px solid red"
        age_msg.style.color = "red"
        age_msg.style.fontSize = "10px"
        age_msg.style.visibility = "visible"
        age_msg.innerHTML = "Age Only between 1 and 140"

        return false
    }
    if (emailElement.value.trim() == "") {
        emailElement.style.border = "1px solid red"
        email_msg.style.color = "red"
        email_msg.style.fontSize = "10px"
        email_msg.style.visibility = "visible"
        email_msg.innerHTML = "Please enter email address"

        return false
    }
    if (emailElement.value.trim().endsWith("@gmail.com") === false) {
        emailElement.style.border = "1px solid red"
        email_msg.style.color = "red"
        email_msg.style.fontSize = "10px"
        email_msg.style.visibility = "visible"
        email_msg.innerHTML = "@gmail.com is missing"

        return false


    } if (mobnoElement.value.length != 10 || mobnoElement.value < 0) {
        if (mobnoElement.value.length != 10) {

            mobnoElement.style.border = "1px solid red"
            mobno_msg.style.color = "red"
            mobno_msg.style.fontSize = "10px"
            mobno_msg.style.visibility = "visible"
            mobno_msg.innerHTML = "mobile no. should be 10 no."

        } else {
            mobnoElement.style.border = "1px solid red"
            mobno_msg.style.color = "red"
            mobno_msg.style.fontSize = "10px"
            mobno_msg.style.visibility = "visible"
            mobno_msg.innerHTML = "mobile no. shouldn't be -ve"

        }
        return true
    }
    add()
}


const table = document.createElement("table");
const tBody = document.createElement("tbody");
const thead = document.createElement("thead");

const tr1 = document.createElement("tr");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");

th1.textContent = "Name"
th2.textContent = "Age"
th3.textContent = "Email"
th4.textContent = "Phone No."

table.appendChild(thead)
thead.appendChild(tr1)


tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)
tr1.appendChild(th4)
table.classList = 'table container border offset-3 mt-3  col-md-6'

addRow()



function add() {
    let values = [nameElement.value, ageElement.value, emailElement.value, mobnoElement.value]
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
        const td4 = document.createElement("td");



        td1.textContent = test[0]
        td2.textContent = test[1]
        td3.textContent = test[2]
        td4.textContent = test[3]

        table.appendChild(tBody)
        tBody.appendChild(tr2)
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tr2.appendChild(td4)

        document.body.appendChild(table)
    }

}

const btn1 = document.getElementById('btn1')
btn1.addEventListener("click", clear)
function clear() {
    localStorage.clear()

    // setInterval(function () {
    //     window.location.reload(1);
    // }, 20);
}


