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
#
#
#
# [Backend in project]()

# Now instead of using file to load the product i gonna use backend
* I gonna use function to load that products 
* The response is JSON, so we use JSON.parse to convert it to JS array
* And it become our products variable, now we can convert it into a class

# But we need to remember, that we need to load the response and then run that function
* First we load the products, using products rendering grid as a parameter of loadProducts function
* So i specify the parameter (fun) that we can pass to the loadProducts function
* And that run the function  

# The function that we provide to loadProducts function is called colback
* So we are giving it a function to run/call in the future
* And we do the same in checkout.js we save render order and payment summary inside parameter (fun)
* Then we gonna call (fun) after we load the products 

# I gonna make place order button in checkout.js interactive
* Once we click it it will take our cart and turn it into an order
* And i gonna use backend to create an order 
* First i add event listener 

#
#
#
# [Backend for orders]()

# I gonna make place order button in checkout.js interactive
* Once we click it it will take our cart and turn it into an order
* And i gonna use backend to create an order 
* First i add event listener for place order buton

# I specify that once we click it will send request to the backend
* We need to send a data to the backend, which will be our cart
* For that we use POST request and headers, which will be an object 
* This header gives the backend more information about our request
* We specify what type of data we are sending in our request
* And body, which is actual data that we are sending, it will be cart array converted into JSON string

# I need to use async await, to wait for the response to come back
* And i save the responnse in a variable

# Once i created an order i need to save it somewhere, so i create orders.js
* First i create an array in which i gonna contain all of my orders
* Then i create function for adding the orders to this array 
* To add the most recent order at the top we use unshift(order)

# I also add if there are some error with network it display a message
* And after we create an order we go to the orders page using window.location
* It let us control the URL at the top of the browser
