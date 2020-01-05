function init() {
    document.getElementById('song').innerHTML = createSong(10);

    // change title
    var title = document.getElementsByTagName('title')[0];
    title.childNodes[0].nodeValue = 'No more zipcodes!';

    // remove the separator
    var sep = document.getElementById('separator');
    sep.parentNode.removeChild(sep);

    // change the CSS style
    document.getElementById('songtitle').classList.add('highlight');

    //Create message element
    document.getElementById('message').innerHTML = createMessage('message');

    //Change css style
    document.getElementById('messagehead').classList.add('highlight2');

    // document.getElementById('image').innerHTML = createImage('img');
}

function createSong(zipCount) {
    var song = '';
    while (zipCount > 0) {
        song += zipCount + ' little zipcodes jumping on the bed<br>';
        song += ' one fell down and broke his head.<br>';
        --zipCount;
    }
    song += 'No more zipcodes jumping on the bed<br>';
    return song;
}

function createMessage() {
    var message = "It's a beautiful day in the neighborhood";
    return message;
}

// function createImage('img') {
//     var img = document.createElement("img");
//     img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
//     var src = document.getElementById("image");
//     src.appendChild(img);
// }

window.onload = init;
