require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const getImage = async query => {
    try{
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
        const data = await response.json();
        const url = await data.data[0].url;
        console.log(url);
    } catch (err) {
        console.error(err)
    }
    

};

getImage('dogs');

// Print out value of API key stored in .env file
//console.log(process.env.API_KEY);