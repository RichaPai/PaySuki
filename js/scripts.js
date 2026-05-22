const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

const showSlide = (i) => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
};

if (slides.length > 0 && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
}


const clientes = document.querySelectorAll('.cliente');
const nextCliente = document.querySelector('.next-cliente');
const prevCliente = document.querySelector('.prev-cliente');

let indexCliente = 0;

const showCliente = (i) => {
    clientes.forEach(c => c.classList.remove('active'));
    clientes[i].classList.add('active');
};

if (clientes.length > 0 && nextCliente && prevCliente) {
    nextCliente.addEventListener('click', () => {
        indexCliente = (indexCliente + 1) % clientes.length;
        showCliente(indexCliente);
    });

    prevCliente.addEventListener('click', () => {
        indexCliente = (indexCliente - 1 + clientes.length) % clientes.length;
        showCliente(indexCliente);
    });
}


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}