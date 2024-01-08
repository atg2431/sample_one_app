
function openModal(){
    // document.getElementById("myModal").style.display = "block";
    appendContacts("Anshuman")
}

function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event){
    var modal = document.getElementById("myModal");
    if (event.target == modal){
        closeModal();
    }
};
const username = prompt("Enter your username:");

const contactsContainer = document.querySelector(".users");

const appendContacts = (username)=>{
    const contact = document.createElement('div');
    contact.innerText = username ;
    contact.classList.add('username');
    contactsContainer.append(contact);
}

if (username == 'harry'){
    appendContacts(username)
}




