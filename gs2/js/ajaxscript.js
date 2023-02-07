// document.getElementById('btnajax').addEventListener('click', makerequest);

// let dt = document.getElementById('data')
// function makerequest() {
//     console.log("Button Clicked !")
//     const xhr = new XMLHttpRequest;  
//     xhr.open('GET', 'data.txt', true) ;
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             console.log("+++++++++++++++++++++")
//             console.log(xhr.responseText)
//             dt.innerText = xhr.responseText
//         } else {
//             console.log("------------------")
//             console.log('Problem Occured !')
//         }
//     }
//     xhr.send();
// }



document.getElementById('btnajax').addEventListener('click', getNameRoll);

let name_ele = document.getElementById('name-id');
let roll_ele = document.getElementById('roll-id');

let json_name_ele = document.getElementById('json_name');
let json_roll_ele = document.getElementById('json_roll');

function getNameRoll() {
    console.log("button clicked !")
    var myxhr = new XMLHttpRequest();
    myxhr.open('GET', 'data.json', true);
    // myxhr.responseType = "json"
    myxhr.onload = () => {
        console.log("entered inside the function !")

        if (myxhr.status === 200) {
            // console.log("request is successfull !")
            // console.log(myxhr.responseType)
            // name_ele.innerText = myxhr.response['name']
            // roll_ele.innerText = myxhr.response['roll']

            console.log(typeof(myxhr.response), "--------------------------")
            let req_data  = JSON.parse(myxhr.response)
            console.log(req_data, typeof(req_data), '111111111111111111111')
            json_name_ele.innerText = req_data['name']
            json_roll_ele.innerText = req_data['roll']


        } else {
            console.log("something went wrong !")

        }

    }

    myxhr.send();


}



