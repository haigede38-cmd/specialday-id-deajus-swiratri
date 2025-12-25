// Script untuk kolom ucapan
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('wishForm');
    const wishList = document.getElementById('wishList');

    // Simpan ucapan di localStorage agar tidak hilang saat refresh
    function getWishes() {
        return JSON.parse(localStorage.getItem('wishes') || '[]');
    }

    function saveWishes(wishes) {
        localStorage.setItem('wishes', JSON.stringify(wishes));
    }

    function renderWishes() {
        wishList.innerHTML = '';
        const wishes = getWishes();
        wishes.forEach(({ name, message }) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="name">${name}:</span>${message}`;
            wishList.appendChild(li);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.name.value.trim() || 'Anonim';
        const message = form.message.value.trim();
        if (message.length === 0) return;
        const wishes = getWishes();
        wishes.unshift({ name, message });
        saveWishes(wishes);
        renderWishes();
        form.reset();
    });

    renderWishes();
});