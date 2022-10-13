let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');

}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



let modalOpen = ()=>{
    modalWindow.style.display = 'flex';
}
function modalClose(){
    modalWindow.style.display = 'none';
    
}
let modalButton = document.querySelector('.box-modal');
let modalWindow = document.querySelector('.modal-window');
modalButton.addEventListener('click', modalOpen);

let modalCloseButton= document.querySelector('.modal-close');
modalCloseButton.addEventListener('click', modalClose);

async function addComment(body, user_name){
    let comments = document.querySelector('.comments');
    let div = document.createElement('dev');
    div.className = 'output';
    let CustomersContent = `
    <div class="comment">
        
    
        <h3><span>Username:</span> ${user_name} </h3>
        <p>
            Comment: ${body}
        </p>
        
        
    </div>`;
    div.innerHTML = CustomersContent;
    comments.append(div);
}

let response = fetch('https://dummyjson.com/comments?skip=8&limit=5')
    .then(r=> r.json())
    .then(r=>parse_json(r.comments))

    

function parse_json(data){
    for(let i = 0; i<data.length; i++){
        let body = data[i].body;
        let user_name = data[i].user.username;
        console.log(body);
        console.log(user_name);
        addComment(body, user_name);
    } 
}




