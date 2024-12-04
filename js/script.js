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

// item product klik untuk menampilkan
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-button button");
    const rows = document.querySelectorAll(".row");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Hapus kelas 'active' dari semua tombol
            buttons.forEach(btn => btn.classList.remove("active"));
            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add("active");

            const target = button.getAttribute("data-target");

            // Tampilkan hanya row yang sesuai dengan target
            rows.forEach(row => {
                if (row.getAttribute("data-category") === target) {
                    row.style.display = "flex";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });
});

