console.log('This is project 4');

const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;
$('#fail').hide();
$('#success').hide();

// let success = document.getElementById('success');
// let fail = document.getElementById('fail');
// fail.classList.remove('show');
// success.classList.remove('show');


console.log(Name, email, phone);

Name.addEventListener('blur', () => {
    console.log('name is blurred');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = Name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        Name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('it did not matched');
        Name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email is blurred');
    let regex = /^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+).([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('it did not matched');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    let regex = /^([0-9]){10}/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('it did not matched');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You Clicked');

    if (validEmail && validName && validPhone) {
        console.log('name email and phone are valid');
        let success = document.getElementById('success');
        let fail = document.getElementById('fail');
        success.classList.add('show');
        // fail.classList.remove('show');
        $('#success').show();
        $('#fail').hide();
    }
    else {
        console.log('email name or phone something is invalid');
        // let success = document.getElementById('success');
        let fail = document.getElementById('fail');
        fail.classList.add('show');
        success.classList.remove('show');

        $('#fail').show();
        $('#success').hide();
    }
})
