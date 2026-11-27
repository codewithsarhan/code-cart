// Profile Open ===

const userIcn = document.querySelector('#userIcn');
const cartIcn = document.querySelector('#cartIcn');
const productMainCn = document.querySelector('#productMainCn');
const reddot = document.querySelector('.red-dot');
const searchInput = document.querySelector('#searchInpt');
const searchIcon = document.querySelector('#searchIcn');

userIcn?.addEventListener('click', () => {
    window.location.href = 'profile.html';
});

cartIcn?.addEventListener('click', () => {
    window.location.href = 'cartItem.html';
});

productMainCn?.addEventListener('click', (event) => {
    if (event.target.closest('.orderBtn')) {
        window.location.href = 'orderForm.html';
    }
});

function updateCartIndicator(cartValue) {
    if (!reddot) return;
    reddot.classList.toggle('hidden', cartValue !== 'true');
}

updateCartIndicator(localStorage.getItem('cartItem'));

function filterProducts() {
    const query = searchInput?.value.trim().toLowerCase();
    if (!query || !productMainCn) {
        productMainCn?.querySelectorAll('.productCard').forEach((card) => {
            card.classList.remove('hidden');
        });
        return;
    }

    productMainCn.querySelectorAll('.productCard').forEach((card) => {
        const name = card.querySelector('.productName')?.textContent.toLowerCase() ?? '';
        card.classList.toggle('hidden', !name.includes(query));
    });
}

searchInput?.addEventListener('input', filterProducts);
searchIcon?.addEventListener('click', filterProducts);
searchIcon?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        filterProducts();
    }
});

const contactForm = document.querySelector('#contactForm');

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#contactName')?.value.trim();
    const email = document.querySelector('#contactEmail')?.value.trim();
    const requirements = document.querySelector('#contactRequirements')?.value.trim();

    if (!name || !email || !requirements) {
        Swal.fire({
            icon: 'error',
            title: 'Incomplete form',
            text: 'Please fill in all contact details.'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Message ready',
        text: 'Thank you. Your project details have been recorded.'
    });
    contactForm.reset();
});
