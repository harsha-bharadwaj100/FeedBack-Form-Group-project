let rating = NaN;
let saveFile = () => {

    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    const age = document.getElementById('txtAge');
    const email = document.getElementById('txtEmail');
    const date = document.getElementById('date');
    const msg = document.getElementById('msg');

    // This variable stores all the data.
    let data =
        '\r Name: ' + name.value + ' \r\n ' +
        'Age: ' + age.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'Date: ' + date.value + ' \r\n ' +
        'Rating: ' + rating + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const blobObject = new Blob([data], { type: 'text/plain' });

    let newLink = document.createElement("a");// Create an anchor tag.
    newLink.download = 'formData.txt'; // The file to save the data.
    newLink.href = URL.createObjectURL(blobObject);// Create url for file and add it to link's href.
    newLink.click();// Click to download the form data file.
    URL.revokeObjectURL(newLink.href);// Revoke the link.
}