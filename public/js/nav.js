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
          <a href="#"><img src="img/user.png" alt=""></a>
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