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


// modal
document.addEventListener("DOMContentLoaded", () => {
    const openModals = document.querySelectorAll('.open-modal');
    const closeModals = document.querySelectorAll('.btn-close-modal');
    const modals = document.querySelectorAll('.modal');

    // Fungsi untuk membuka modal
    openModals.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.closest('.product-card');
            const itemId = parent.getAttribute('data-id'); // Ambil data-id produk
            const modal = document.querySelector(`#modal-${itemId}`); // Cari modal berdasarkan ID

            if (modal) {
                modal.style.display = 'flex'; // Tampilkan modal
            }
        });
    });

    // Fungsi untuk menutup modal
    closeModals.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none'; // Sembunyikan modal
        });
    });

    // Menutup modal jika klik di luar konten modal
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
