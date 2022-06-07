! function () {
    console.log('Ready...');
    if (window.location != 'http://localhost/easy/' && !window.localStorage.getItem('user')) {
        window.location.href = 'http://localhost/easy/';
    }
}();

class Modal {
    modal;
    input;
    cancel;
    confirm;
    constructor(config) {
        this.modal = document.querySelector('dialog');
        this.input = document.querySelector('input');
        this.cancel = document.querySelector('a#cancel');
        this.confirm = document.querySelector('a#confirm');

        this.url = config.url;

        this.close();
        this.send();
    }

    open(el) {
        el.addEventListener('click',()=>{
            if (!window.localStorage.getItem('user')) {
                this.modal.setAttribute('open', '');
                this.input.focus();
            } else {
                window.location.href = this.url;
            }
        });
    }

    close() {
        this.cancel.addEventListener('click', () => {
            this.modal.removeAttribute('open');
            this.input.value = '';
        });
    }

    send(){
        this.confirm.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.input.value == '') {
                this.input.setAttribute('aria-invalid', true);
            } else{
                window.localStorage.setItem('user', this.input.value);
                window.location.href = this.url;
            }
        });
    }
}