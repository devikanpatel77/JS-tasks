const home = document.getElementById("home")
home.addEventListener('click', addImage)
const image = document.createElement('img')
function addImage() {
    
    const id1 = document.getElementById('id1')
    image.src = "./img5.jpg";
     image.style.width = "1300px"
     image.style.height = "800px"

    id1.innerHTML = ""
    id1.appendChild(image)
}

