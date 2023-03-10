const visitorCounter = document.querySelector('#visitor-counter');
// document.querySelector('#visitor-button').addEventListener('click', visitorCount)


fetch('https://aqz2aoirg0.execute-api.us-east-2.amazonaws.com/dev/visitors/1')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        visitorCounter.innerText = data.count
    })
    .catch(err => {
        console.log(`error ${err}`)
    });