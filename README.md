# sunny-app
https://andrew3586.github.io/sunny-app/

The Weather Sunny App Project Creation
Creating the Sunny App was a little complex at times and then straight forward to.
There were elements that were easy to understand and execute and there were elements that required research and trying multiple options. 

Starting from the end user interaction, you can retrieve temperature, whether its cloudy or sunny, humidity and wind speed. Simply by entering a state and country code in the search box. To make the experience fun every city change comes with a background picture change that relates to the city. 

Additional features include being able to hit the enter key to finalise a search as well the hourglass icon. I thought you could have a favourites whereby, you can have your top five searches saved and then clicked on easily to get the weather details or delete and replace at any time. Additionally if you enter more than five searches you will get an error message saying you exceeded your limit. You also get an error message if you try to duplicate a favourites from your search. You will also retain your favourites once you leave and come back to your weather page, so basically committed to memory.

Now a little on the technical side of things. The HTML file has been set up as a front end template, containing the classes and some url links and file links back to the CSS file and Javascript file. Also containing the framework of how the information is to be displayed statically on the browser. The CSS file creating the styling through mainly the classes, divs, ID's and keywords.

This mainly being a Javascript assignment, I will go into a little more detail around my coding. My first line of code being (let favourites = JSON.parse(localStorage.getItem('city')) || [];) Translates favourites to memory through the let function equalling JSON.parse converts text into a javascript object, the use of JSON is to exchange data to and from a web server. Finally localStorage.getItem('city') will retrieve the value from a specified local storage item. As we move to the next layer of code, we are retrieving and adding the main url and API Key to obtain the data we need to make the Sunny APP work and then making the apiKey a variable.

Then next we are going to fetch the data we require, I have created a function fetchWeather(city) invoking a city (Object and how it is to be used). Fetch API will fetch data and make asynchronous HTTP requests, we then add what we specifically what to catch in the url and declaring those values and Api Key. Next .then returns a promise through json which sorts the data into readable structure. The .then data returns a promise.

We then start of with an if statement and then create a variable for txt mapping through a array. (map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements.)  then we use .join (The join() method returns an array as a string. The join() method does not change the original array). Next we access the information on the HTML page through the document query selector (".cities").innerHTML = txt;. Followed by simply displaying the weather.

Then creating the function displayweather = (function displayWeather(data) then actioning which data I want to access from the api to display on my Sunny App. Then the document.queryselector displaying the data in a formmated way on the HTML page by access through classes, ID's Divs etc.
I have also included a url for the sun and cloud icon, when changing states the icon picture changes from the API feed to the matching weather forecast icon picture. The secound url is the changing pictures of states when a new state is entered in the search area and the search function is executed, then the background picture changes accordingly.

Next section of code adds an eventlistener and the variable city.
(Convert a JavaScript object into a string with JSON.stringify()).
Overall have created the if and else statements so that the favourites limit is 5 anything over 5 returns a falsy and will give you an error message.  The same will happen if you enter the same city name. Next is the favourites individual city delete function.  The following sections are pretty straight forward now. The city name is being fetched. When the search icon is clicked it will retrive the city. The next function is when the enter key is released it will resolve the city search. Finally on a refresh or new start the default city is Melbourne, AU.



