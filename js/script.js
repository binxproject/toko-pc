const navigation = document.querySelector('.nav-navigation');
const buttonHamburger = document.getElementById('btn-hamburger');

buttonHamburger.onclick = () => {
    navigation.classList.toggle('active');
}

const search = document.querySelector('.nav-search');
const buttonSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('nav-search');

buttonSearch.onclick = () => {
    search.classList.toggle('active');
    inputSearch.focus();
}

// klik diluar element untuk menutup konten yang ditampilkan
document.addEventListener('click', function(e) {
    if(!buttonHamburger.contains(e.target) && !navigation.contains(e.target)) {
        navigation.classList.remove('active');
    }

    if(!buttonSearch.contains(e.target) && !search.contains(e.target)) {
        search.classList.remove('active');
    }
})



