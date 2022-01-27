const form = document.getElementById('feedback_form');
const alertDiv = document.getElementById('feedback_alert');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name = document.getElementById('c_fullname').value;
    const email = document.getElementById('c_email').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const feedback = document.getElementById('c_feedback').value;

    console.log(name, email, rating, feedback);

    db.collection("feedbacks").add({
        name,
        email,
        rating,
        feedback
    }).then((docRef) => {
        alertDiv.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                Thank you for submitting your feedback !
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