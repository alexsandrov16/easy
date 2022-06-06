!function () {
    let modal = document.querySelector('dialog');
    if (!window.localStorage.getItem('user')) {
        modal.setAttribute('open', '');
    } else {
        window.location.href = "http://localhost/easy/quiz.html";
    }
}();

function saveName() {
    let input = document.querySelector('input');
    let cancel = document.querySelector('a#cancel');
    let confirm = document.querySelector('a#confirm');

    cancel.addEventListener('click', () => {
        input.value = '';
    });

    confirm.addEventListener('click', () => {
        if (input.value == '') {
            input.setAttribute('aria-invalid', true);
        } else {
            window.localStorage.setItem('user', input.value);
            window.location.href = "http://localhost/easy/quiz.html";
        }
    });
}