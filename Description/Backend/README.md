# I gonna send http message using XMLHttpRequest, which is built-in class in JavaScript
* This class create a request to send to the backend 
* To set up this request we use .open() and inside brackets we pass 2 parameters
* First parameter tells what type of HTTP message we send, por example: GET, POST
* And second parameter said, where send the HTTP message, using URL

# To send the HTTP message/request we use .send() 
* We can see our requests and responses in Network section
* But also we can get the response in our code using .response
* .send in asynchronous code, so it don't wait for the line of code where it is used to finish 
* It send request and goes to next line, but the response may come back later

# The way to wait for the response to come back we use .addEventListener()
* I will allow us to get the response after it is loaded   
