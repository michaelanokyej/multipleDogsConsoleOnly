const multipleRandomURL = 'https://dog.ceo/api/breeds/image/random/'; 
let userInput = 3;

function dogApiCall(userInput){
    fetch('https://dog.ceo/api/breeds/image/random/' + userInput)
    .then(response => response.json())
    .then(responseJson => display(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

    

//     fetch('https://dog.ceo/api/breeds/image/random/' + userInput')
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error(response.statusText);
//     })
//     .then(responseJson => displayResults(responseJson, maxResults))
//     .catch(err => {
//       $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     });
}



function display(responseJson){
    console.log(responseJson);
    for(let i =0; i < responseJson.message.length; i++){
        console.log(responseJson.message[i]);
    };
    // $('.results').removeClass('hidden');
}

function callOnSubmit() {
    $('form').submit(event => {
        event.preventDefault();
       userInput = $('#numberOfDogs').val();
        console.log(`user input = ${userInput}`);
        dogApiCall(userInput);
    });
}

$(callOnSubmit);