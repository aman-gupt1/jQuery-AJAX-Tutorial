# Day 5 - Effects and Animations

## What are Effects?

Effects are used to show, hide, fade, slide, and animate HTML elements.

jQuery provides built-in methods for creating interactive UI without writing complex JavaScript.

---

# 1. hide()

Hide an element.

Syntax:

```javascript
$("#box").hide();
```

---

# 2. show()

Show a hidden element.

Syntax:

```javascript
$("#box").show();
```

---

# 3. toggle()

Toggle between hide and show.

Syntax:

```javascript
$("#box").toggle();
```

---

# 4. fadeIn()

Gradually show an element.

Syntax:

```javascript
$("#box").fadeIn();
```

---

# 5. fadeOut()

Gradually hide an element.

Syntax:

```javascript
$("#box").fadeOut();
```

---

# 6. fadeToggle()

Toggle fade effect.

Syntax:

```javascript
$("#box").fadeToggle();
```

---

# 7. slideUp()

Hide element with slide effect.

Syntax:

```javascript
$("#box").slideUp();
```

---

# 8. slideDown()

Show element with slide effect.

Syntax:

```javascript
$("#box").slideDown();
```

---

# 9. slideToggle()

Toggle slide effect.

Syntax:

```javascript
$("#box").slideToggle();
```

---

# 10. animate()

Create custom animations.

Syntax:

```javascript
$("#box").animate({
    left: "250px"
});
```

Example:

```javascript
$("#box").animate({
    width: "300px",
    height: "150px"
});
```

---

# 11. stop()

Stops current animation.

Syntax:

```javascript
$("#box").stop();
```

---

# 12. Chaining

Execute multiple methods together.

Syntax:

```javascript
$("#box")
.fadeOut()
.fadeIn()
.slideUp()
.slideDown();
```

---

# Real Life Uses

- Dropdown Menus
- Image Sliders
- Notification Panels
- Product Filters
- Popups and Modals

---

# Interview Questions

Q1. Difference between hide() and fadeOut()?

Answer:

hide() instantly hides.

fadeOut() hides gradually.

---

Q2. Difference between slideUp() and hide()?

Answer:

slideUp() provides animation.

hide() instantly removes visibility.

---

Q3. What is animate()?

Answer:

animate() is used to create custom animations by changing CSS properties.

---

Q4. What is chaining?

Answer:

Calling multiple methods on the same element.

Example:

```javascript
$("#box").hide().show();
```

---

Q5. Why use stop()?

Answer:

To stop queued animations.

---

# Summary

✔ hide()

✔ show()

✔ toggle()

✔ fadeIn()

✔ fadeOut()

✔ fadeToggle()

✔ slideUp()

✔ slideDown()

✔ slideToggle()

✔ animate()

✔ stop()

✔ Chaining