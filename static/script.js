var Rating = NaN;
starer = (rating) => {
    console.log("running");
    Rating = rating;
    for (let i = 0; i < document.getElementsByClassName("star").length; i++) {
        document.getElementsByClassName("star")[i].classList.remove("stared");
    }
    for (let i = 0; i < rating; i++) {
        document.getElementsByClassName("star")[i].classList.add("stared");
        console.log("added stared");
    }
}
let saveFile = () => {

    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const email = document.getElementById('txtEmail');
    const visit = getRadioValue('visit');
    const learn = getRadioValue('learn');
    const product = document.getElementById('product');
    const date = document.getElementById('date');
    const expectations = getRadioValue('expectations');
    const issues = getRadioValue('issues');
    const reccomend = getRadioValue('reccomend');
    const msg = document.getElementById('msg');

    // This variable stores all the data.
    let data =
        '\r Name: ' + name.value + ' \r\n ' +
        'Age: ' + age.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'visit: ' + visit.value + ' \r\n ' +
        'learn: ' + learn.value + ' \r\n ' +
        'product: ' + product.value + ' \r\n ' +
        'expectations: ' + expectations.value + ' \r\n ' +
        'issues: ' + issues.value + ' \r\n ' +
        'reccomend: ' + reccomend.value + ' \r\n ' +
        'Date: ' + date.value + ' \r\n ' +
        'Rating: ' + Rating + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const blobObject = new Blob([data], { type: 'text/plain' });

    let newLink = document.createElement("a");// Create an anchor tag.
    newLink.download = 'textfolder/formData.txt'; // The file to save the data.
    newLink.href = URL.createObjectURL(blobObject);// Create url for file and add it to link's href.
    newLink.click();// Click to download the form data file.
    URL.revokeObjectURL(newLink.href);// Revoke the link.
}

function getRadioValue(name) {
    var ele = document.getElementsByName(name);
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}
function saveDatabase() {
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const email = document.getElementById('txtEmail');
    const visit = getRadioValue('visit');
    const learn = getRadioValue('learn');
    const product = document.getElementById('product');
    const date = document.getElementById('date');
    const expectations = getRadioValue('expectations');
    const issues = getRadioValue('issues');
    const reccomend = getRadioValue('reccomend');
    const msg = document.getElementById('msg');
    console.log(visit, learn, expectations, issues, reccomend);
    params = {"name":name.value, "age":age.value, "email":email.value, "date":date.value, "rating":Rating, "msg":msg.value, "visit":visit, "learnt":learn, "product":product.value, "expectations":expectations, "issues":issues, "reccomend":reccomend}
    // xhr.send(JSON.stringify(params));
    fetch('http://127.0.0.1:5000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    console.log("Completed!")
}