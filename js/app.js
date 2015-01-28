window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./js/github.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?
        var token = "7c0555e739ceb57d4a4d07840111c9d533343f86";

        new GithubClient(token);
    })

}