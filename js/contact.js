const form = document.getElementById('contactForm');
const alertDiv = document.getElementById('contact_alert');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log(name, email, subject, message);

    db.collection("enquiries").add({
        name,
        email,
        subject,
        message
    }).then((docRef) => {
        alertDiv.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Your message is sent successfully, we'll get back with you in 48 hrs !
            </div>
        </div>`;
    }).catch((error) => {
        alertDiv.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          Error, Something went wrong please try again later !
        </div>
      </div>`;
    })

    setTimeout(() => {
        alertDiv.innerHTML = '';
    },10000)

    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('subject').value='';
    document.getElementById('message').value=''; 
})