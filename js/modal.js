const close = document.querySelector('.modalClose'),
    container = document.querySelector('.modalContainer'),
    btn = document.querySelector('.btn'),
    list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        container.classList.add('active');
    })
}

close.addEventListener('click', () => {
    container.classList.remove('active');
})
