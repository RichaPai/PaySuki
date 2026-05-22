
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    const showSlide = (i) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[i].classList.add('active');
    };

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    const clientes = document.querySelectorAll('.cliente');
let indexCliente = 0;

const showCliente = (i) => {
    clientes.forEach(c => c.classList.remove('active'));
    clientes[i].classList.add('active');
};

document.querySelector('.next-cliente').addEventListener('click', () => {
    indexCliente = (indexCliente + 1) % clientes.length;
    showCliente(indexCliente);
});

document.querySelector('.prev-cliente').addEventListener('click', () => {
    indexCliente = (indexCliente - 1 + clientes.length) % clientes.length;
    showCliente(indexCliente);
});