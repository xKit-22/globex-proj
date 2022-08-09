const modal = document.querySelector('#modal1')
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, {});

let usersList =[]

function renderUserInModal(index) {
    const currentUser = usersList[index]
    modal.innerHTML =
    `<a class="btn-floating modal-close btn-middle waves-effect waves-light purple lighten-1"><i class="material-icons">close</i></a>
<div class="modal-content">
        <h4>${currentUser.name}</h4>
        <div class="main-info">
            <div class="main-info_main">
                <p><span><b>Телефон:</b></span><span style="color: gray; text-decoration: underline">${currentUser.phone}</span></p>
                <p><span><b>Почта:</b></span><span class="main_span" style=" text-decoration: underline">${currentUser.email}</span></p>
                <p><span><b>Дата приема:</b></span><span class="main_span">${currentUser.hire_date}</span></p>
                <p><span><b>Должность:</b></span><span class="main_span">${currentUser.department}</span></p>
                <p><span><b>Подразделение:</b></span><span class="main_span">${currentUser.position_name}</span></p>
            </div>
            <div class="main-info_another">
                <p><b>Дополнительная информация: </b> <br>
                    <span  class="main_span">Разработчики используют текст Lorem ipsum в качестве заполнителя макета страницы. Так как дополнительной информации
                        в JSON нет, а адрес нигде не используется, закинул его сюда: ${currentUser.address}</span>
                </p>
            </div>
        </div>
    </div>`
    instances[0].open();
}


function renderUserCard(currentUser, index) {
    document.querySelector('.cards').innerHTML+= ` 
 <div class="card white" onclick="renderUserInModal(${index})">
    <div class="card-content black-text">
                            <span class="card-title">${currentUser.name}</span>
                            <p>
                                <i class="tiny material-icons">phone_iphone</i>
                                <a href="#" class="card-link">${currentUser.phone}</a>
                            </p>
                            <p>
                                <i class="tiny material-icons">mail_outline</i>
                                <a href="#" class="card-link card-email">${currentUser.email}</a>
                            </p>
                        </div>
</div>`
}

const renderAllUserCards = users => {
    document.querySelector(".cards").innerHTML = "";
    users.forEach(renderUserCard);
}

const searchUsersByKey = async () => {
    if (event.key === "Enter") {
        const value = document.getElementById("search").value;
        const url = value.length ? `http://127.0.0.1:3000?term=${value}` : 'http://127.0.0.1:3000'
        const res = await fetch(url);
        usersList = await res.json();
        renderAllUserCards(usersList);
    }
}

const searchUsersByBtn = async () => {
        const value = document.getElementById("search").value;
        const url = value.length ? `http://127.0.0.1:3000?term=${value}` : 'http://127.0.0.1:3000'
        const res = await fetch(url);
        usersList = await res.json();
        renderAllUserCards(usersList);
}

const getAllUsers = async () => {
    const url = 'http://127.0.0.1:3000';
    const res = await fetch(url);
    usersList = await res.json();
    renderAllUserCards(usersList);
}

getAllUsers();








