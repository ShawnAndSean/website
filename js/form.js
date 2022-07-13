window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        console.log(sessionStorage.user)
        console.log(compareToken(user.authToken, user.email))
        if (compareToken(user.authToken, user.email)) {
            console.log('hello')
            location.replace('/')
        }
    }
}


const loader = document.querySelector('.loader')

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notifications = document.querySelector('#notifications' || null);

submitBtn.addEventListener('click', () => {
    //for sign up page
    if (name != null) {
        if (name.value.length < 3) {
            showAlert('Name must be 3 characters long.');
        } else if (!email.value.length) {
            showAlert('enter your email.');
        } else if (password.value.length < 8) {
            showAlert('password is required to be 8 characters long.');
        } else if (!number.value.length) {
            showAlert('enter your phone number.');
        } else if (!Number(number.value) || number.value.length < 10) {
            showAlert('invalid number. enter a valid number (10 digits).');
        } else if (!tac.checked) {
            showAlert('please agree with terms and agreements.');
        } else {
            loader.style.display = 'block';
            sendData("/signup", {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notifications: notifications.checked,
                seller: false
            })
        }
    }
    // for login page
    else {
        if (!email.value.length || !password.value.length) {
            showAlert('Fill all fields.')
        } else {
            loader.style.display = 'block';
            sendData("/login", {
                email: email.value,
                password: password.value,
            })
        }
    }
})



//functions used always






//send data function  

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(data)
    }).then((res) => res.json()).then(response => { processData(response); })
}

const processData = (data) => {
    loader.style.display = null;
    if (data.alert) {
        showAlert(data.alert);
    } else if (data.name) {
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
    }
}


const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg')

    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1000);
}