# Day 1 - Introduction to jQuery

## What is jQuery?

jQuery is a fast, lightweight JavaScript library that simplifies HTML DOM manipulation, event handling, animations, and AJAX operations.

Official tagline:

"Write Less, Do More"

---

## Why jQuery?

Before jQuery, JavaScript code was longer and more complex.

JavaScript:

```javascript
document.getElementById("btn").addEventListener("click", function () {
    alert("Hello");
});
```

jQuery:

```javascript
$("#btn").click(function () {
    alert("Hello");
});
```

---

## Advantages of jQuery

1. Easy DOM Manipulation
2. Easy Event Handling
3. Cross Browser Support
4. Built-in Animations
5. Simplified AJAX Calls
6. Less Code

---

## How jQuery Works

Basic Syntax:

```javascript
$(selector).action();
```

Example:

```javascript
$("#btn").click();
```

Where:

- $ = jQuery Object
- #btn = Selector
- click() = Action

---

## What is $(document).ready()?

It ensures the entire HTML document is loaded before executing jQuery code.

Syntax:

```javascript
$(document).ready(function () {

});
```

Shortcut:

```javascript
$(function () {

});
```

---

## Common Uses of jQuery

- Form Validation
- Image Sliders
- Dynamic Content
- AJAX Requests
- Single Page Applications
- Interactive UI Components

---

## Interview Questions

Q1. What is jQuery?

Answer:
jQuery is a JavaScript library used to simplify DOM manipulation, event handling, animations, and AJAX.

---

Q2. Why is jQuery used?

Answer:
It reduces code complexity and provides cross-browser compatibility.

---

Q3. What does $ represent in jQuery?

Answer:
$ is an alias for the jQuery object.

---

Q4. What is document.ready()?

Answer:
It ensures the DOM is fully loaded before executing jQuery code.

---

## Summary

✔ What is jQuery
✔ Why jQuery
✔ Advantages
✔ jQuery Syntax
✔ document.ready()
✔ Basic Event Handling