class GifLogger {

    static printGif(url, height){
        console.log('%c       ', 'font-size: '+height+'px; background: url('+url+') no-repeat;'); //Simply log the gif.
    }

    static getGif(tag){
        const apiKey ='{YOUR_API_KEY}'; //Insert Giphy API key that can be retrieved here: https://developers.giphy.com/dashboard/.
        const url = 'http://api.giphy.com/v1/gifs/search?q='+tag+'&limit=20&api_key=' + apiKey; // Url to retrieve the data
        const classContext = this; // Use this to access the class context from the ".then" method
        const randomIndex =  Math.floor(Math.random()*(20)); // get a random number between 0 and 20 (because this is the limit we set on our request)


        fetch(url, {method: 'get'}).then(function (resp) {
            return resp.json();
        }).then(function (json) {
            const gifObj = json.data[randomIndex].images.original; // Grab a random gif from the 20 selected and get the log-able gif link.
            classContext.printGif(gifObj.url, gifObj.height)
        });
    }

    static log(tag){
        this.getGif(tag);
    }
}
