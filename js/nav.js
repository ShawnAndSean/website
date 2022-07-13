const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
      <div class="nav">
        <a href="index.html"><img src="images/logo.png" class="brand-logo" alt=""></a>
        <div class="nav-items">
          <div class="search">
            <input type="text" class="search-box" placeholder = "Search product-name, variant.... "name="" value="">
            <button type="button" name="button" class="search-btn">Search</button>
          </div>
          <a>
            <img src="img/user.png" id = "user-img" alt="">
            <div class = "login-logout-pop hide">
              <p class = "account-info"> Log in as, name</p>
              <button class = "btn" id = "user-btn"> Log out</button>
            </div>
          </a>
          <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
      </div>
        <ul class="links-container">
          <li class="link-item"><a href="#" class="link">home</a></li>
          <li class="link-item"><a href="#" class="link">man</a></li>
          <li class="link-item"><a href="#" class="link">woman</a></li>
        </ul>`;
}
createNav();

const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-pop');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
        //if user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        popuptext.innerHTML = 'Log in Account';
        actionBtn.innerHTML = 'Log in ';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}