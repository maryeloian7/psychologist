function tabs () {
    const btns = document.querySelectorAll('.cases_item');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 10 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

}

export default tabs;