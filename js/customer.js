const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit',(e) => {
    e.preventDefault();

    console.log("Customer Form Submitted !");
})
