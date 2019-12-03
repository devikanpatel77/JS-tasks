function setNewImage()
{
    document.getElementById ("imag1").src ="./t7.webp";
    document.getElementById ("imag2").src ="./t6.webp";
}


function outrow()
{
    document.getElementById ("imag1").src ="./t1.webp";
    document.getElementById ("imag2").src ="./t2.webp";    
}



const a = document.createElement("img")
const b = document.createElement("img")
 function clickrow()
 {
     // const a = document.createElement("img")
    // const b = document.createElement("img")
    a.src = "./t4.webp" 
    b.src = "./t5.webp"

    a.style.width = "300";
    b.style.width = "300";


   const id1 =  document.getElementById ("id1");
    id1.appendChild(a)
    id1.appendChild(b)

    document.body.appendChild(id1)
    
 }
 


