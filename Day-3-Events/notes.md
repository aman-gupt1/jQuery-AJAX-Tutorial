# Day 3 - jQuery Events

## What is an Event?

An event is an action performed by the user or browser.

Examples:

- Mouse Click
- Double Click
- Typing in Input
- Hovering Mouse
- Form Submit
- Focus on Input

---

# Event Syntax

```javascript
$(selector).event(function(){

});
```

Example:

```javascript
$("#btn").click(function(){
    alert("Button Clicked");
});
```

---

# 1. click()

Triggered when an element is clicked.

```javascript
$("#btn").click(function(){
    alert("Button Clicked");
});
```

---

# 2. dblclick()

Triggered when user double-clicks.

```javascript
$("#btn").dblclick(function(){
    alert("Double Clicked");
});
```

---

# 3. mouseenter()

Triggered when mouse enters an element.

```javascript
$("#box").mouseenter(function(){
    console.log("Mouse Entered");
});
```

---

# 4. mouseleave()

Triggered when mouse leaves an element.

```javascript
$("#box").mouseleave(function(){
    console.log("Mouse Left");
});
```

---

# 5. hover()

Combination of mouseenter and mouseleave.

```javascript
$("#box").hover(
    function(){
        console.log("Enter");
    },
    function(){
        console.log("Leave");
    }
);
```

---

# 6. keyup()

Triggered when key is released.

```javascript
$("#name").keyup(function(){
    console.log($(this).val());
});
```

---

# 7. keydown()

Triggered when key is pressed.

```javascript
$("#name").keydown(function(){
    console.log("Key Pressed");
});
```

---

# 8. focus()

Triggered when input gets focus.

```javascript
$("#name").focus(function(){
    $(this).css("background","yellow");
});
```

---

# 9. blur()

Triggered when input loses focus.

```javascript
$("#name").blur(function(){
    $(this).css("background","white");
});
```

---

# 10. change()

Triggered when value changes.

```javascript
$("#course").change(function(){
    alert($(this).val());
});
```

---

# 11. submit()

Triggered when form is submitted.

```javascript
$("form").submit(function(e){

    e.preventDefault();

    alert("Form Submitted");

});
```

---

# Event Object

The event object provides details about the event.

```javascript
$("#btn").click(function(event){

    console.log(event);

});
```

---

# Event Delegation

Useful for dynamically added elements.

```javascript
$(document).on("click",".item",function(){

    alert("Item Clicked");

});
```

---

# Interview Questions

Q1. What is an Event?

Answer:
An event is an action performed by the user or browser.

---

Q2. Difference between keydown and keyup?

Answer:

keydown → key pressed

keyup → key released

---

Q3. Difference between mouseenter and hover?

Answer:

mouseenter handles entering only.

hover handles enter and leave both.

---

Q4. Why use preventDefault()?

Answer:

To stop default browser behavior.

Example:

Prevent form submission.

---

Q5. What is Event Delegation?

Answer:

A technique to handle events on dynamically added elements.

---

# Summary

✔ click()

✔ dblclick()

✔ mouseenter()

✔ mouseleave()

✔ hover()

✔ keyup()

✔ keydown()

✔ focus()

✔ blur()

✔ change()

✔ submit()

✔ Event Object

✔ Event Delegation