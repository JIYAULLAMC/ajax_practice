


document.getElementById('btnajax').addEventListener('click', makerequest);


function makerequest() {
    const xhr = new XMLHttpRequest;  
    xhr.open('GET', 'data.txt', true) ;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
            console.log(xhr.responseText)
        } else {
            console.log(xhr.status)
        }
       } else {
        console.log('problem occured !', xhr.readyState)
       }
    }
    xhr.send();
}