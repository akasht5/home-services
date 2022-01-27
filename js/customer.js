const form = document.getElementById('customer_form');
const alertDiv = document.getElementById('alert');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const cfirstname = document.getElementById('customer_firstname').value;
    const clastname = document.getElementById('customer_lastname').value;
    const cemail = document.getElementById('customer_email').value;
    const ccontact = document.getElementById('customer_contact').value;
    const caddress = document.getElementById('customer_address').value;

    let services = [];

    function validateCheckboxes() {
        for(let i=1; i<=5; i++){
            const item = document.getElementById(`defaultCheck${i}`);
            if(item.checked){
                services.push(item.value);
                item.checked = false;
            }
        }
    }

    validateCheckboxes();

    db.collection("customers").add({
        firstname: cfirstname,
        lastname: clastname,
        email: cemail,
        contact: ccontact,
        address: caddress,
        services: services
    }).then((docRef) => {
        alertDiv.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
            Your request is sent successfully ! We will get in touch with you within 48 working hours.
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

    document.getElementById('customer_firstname').value='';
    document.getElementById('customer_lastname').value='';
    document.getElementById('customer_email').value='';
    document.getElementById('customer_contact').value='';
    document.getElementById('customer_address').value=''; 
})
