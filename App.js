const axios = require('axios').default

const getSimpsonQuote = async() => {
    await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes').then((response) => {
    console.log(response.data[0].quote);
    }).catch((error) => {
        console.log(error);
    })
}

getSimpsonQuote();