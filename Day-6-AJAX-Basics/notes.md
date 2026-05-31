# Day 6 - AJAX Basics

## What is AJAX?

AJAX stands for:

Asynchronous JavaScript And XML

AJAX allows a webpage to communicate with a server without reloading the page.

---

## Why AJAX?

Without AJAX:

User Action
    ↓
Page Reload
    ↓
New Data Loaded

With AJAX:

User Action
    ↓
Request Sent
    ↓
Response Received
    ↓
UI Updated
    ↓
No Page Reload

---

## Real World Examples

- Login Form
- Registration Form
- Search Suggestions
- Weather App
- Product Filtering
- Notifications
- Chat Applications

---

# AJAX Lifecycle

Browser
    ↓
AJAX Request
    ↓
Server
    ↓
Database
    ↓
JSON Response
    ↓
Browser Update

---

# Basic AJAX Syntax

```javascript
$.ajax({

    url: "",

    method: "",

    success: function(response){

    },

    error: function(error){

    }

});
```

---

# AJAX GET Request

Used to fetch data.

```javascript
$.ajax({

    url: "https://jsonplaceholder.typicode.com/users",

    method: "GET",

    success: function(data){

        console.log(data);

    }

});
```

---

# AJAX POST Request

Used to send data.

```javascript
$.ajax({

    url: "/users",

    method: "POST",

    data: {
        name: "Aman"
    }

});
```

---

# GET vs POST

GET

- Fetch Data
- Visible in URL
- Less Secure

POST

- Send Data
- Hidden from URL
- More Secure

---

# Handling JSON Response

Example Response:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham"
  }
]
```

Access Data:

```javascript
data[0].name
```

---

# Error Handling

```javascript
error: function(error){

    console.log(error);

}
```

Used when:

- Server Down
- Wrong URL
- Internet Issues

---

# Loading Spinner

Show loader while request is running.

```javascript
$(document).ajaxStart(function(){

    $("#loader").show();

});

$(document).ajaxStop(function(){

    $("#loader").hide();

});
```

---

# Shortcuts

GET

```javascript
$.get(url,function(data){

});
```

POST

```javascript
$.post(url,data,function(response){

});
```

JSON

```javascript
$.getJSON(url,function(data){

});
```

---

# Interview Questions

Q1. What is AJAX?

Answer:

AJAX is a technique that allows data exchange with a server without refreshing the page.

---

Q2. Why AJAX is used?

Answer:

To update content dynamically and improve user experience.

---

Q3. Difference between GET and POST?

Answer:

GET retrieves data.

POST sends data.

---

Q4. What is JSON?

Answer:

JSON (JavaScript Object Notation) is a lightweight format used for data exchange.

---

Q5. What is asynchronous communication?

Answer:

The browser continues working while waiting for the server response.

---

Q6. What is success callback?

Answer:

Executed when request is successful.

---

Q7. What is error callback?

Answer:

Executed when request fails.

---

# Summary

✔ AJAX Introduction

✔ AJAX Lifecycle

✔ $.ajax()

✔ GET Request

✔ POST Request

✔ JSON Response

✔ Error Handling

✔ Loading Spinner

✔ AJAX Shortcuts