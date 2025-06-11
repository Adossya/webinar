window.addEventListener('DOMContentLoaded', () => {

    const phoneInput = document.getElementById('phone');

    const iti = window.intlTelInput(phoneInput, {
    initialCountry: "ua",
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.1/build/js/utils.js"
    });



    function getFormattedDate(date) {
    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('uk-UA', options);
    }

    function updateDateButton() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 19) {
        now.setDate(now.getDate() + 1);
    }

    const formattedDate = getFormattedDate(now);

    const headerDate = document.getElementById('day');
    const formatDate = document.getElementById('when');
    if (headerDate && formatDate) {
        headerDate.textContent = `Дата ${formattedDate}`;
        formatDate.textContent = formattedDate;
    }
    }

    updateDateButton();



    const smoothLinks = document.querySelectorAll('[data-scroll]');

    smoothLinks.forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSelector = this.getAttribute('data-scroll');
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
        });
    });


});