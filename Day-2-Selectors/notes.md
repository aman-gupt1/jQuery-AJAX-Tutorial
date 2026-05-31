# Day 2 - jQuery Selectors

## What are Selectors?

Selectors are used to find and select HTML elements.

Syntax:

```javascript
$(selector)
```

Example:

```javascript
$("#heading")
```

This selects an element whose id is "heading".

---

# Types of Selectors

## 1. ID Selector

Selects a single element using its id.

Syntax:

```javascript
$("#id")
```

Example:

```javascript
$("#title")
```

HTML:

```html
<h1 id="title">Hello</h1>
```

---

## 2. Class Selector

Selects all elements having the same class.

Syntax:

```javascript
$(".className")
```

Example:

```javascript
$(".box")
```

HTML:

```html
<div class="box"></div>
<div class="box"></div>
```

---

## 3. Element Selector

Selects all elements of the same tag.

Syntax:

```javascript
$("p")
```

Example:

```javascript
$("p")
```

HTML:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

---

## 4. Multiple Selector

Select multiple different elements.

Syntax:

```javascript
$("h1,p")
```

Example:

```javascript
$("h1,p")
```

---

## 5. Universal Selector

Selects all elements.

Syntax:

```javascript
$("*")
```

Example:

```javascript
$("*")
```

---

## 6. Attribute Selector

Select elements having a specific attribute.

Syntax:

```javascript
$("[type='text']")
```

Example:

```javascript
$("input[type='text']")
```

---

## 7. Descendant Selector

Select child elements inside another element.

Syntax:

```javascript
$("parent child")
```

Example:

```javascript
$("#container p")
```

---

## 8. First Selector

Select first matched element.

Syntax:

```javascript
$("p:first")
```

---

## 9. Last Selector

Select last matched element.

Syntax:

```javascript
$("p:last")
```

---

# Real Life Example

Suppose we have:

```html
<div id="card">
    <h2>Product</h2>
    <p>Price ₹999</p>
</div>
```

Select Product Title:

```javascript
$("#card h2")
```

Select Price:

```javascript
$("#card p")
```

---

# Interview Questions

Q1. What is a Selector?

Answer:
A selector is used to select HTML elements and perform operations on them.

---

Q2. Difference between ID and Class Selector?

Answer:

ID:
```javascript
$("#id")
```

Class:
```javascript
$(".class")
```

ID should be unique.
Class can be used multiple times.

---

Q3. Which selector is fastest?

Answer:

ID Selector

```javascript
$("#id")
```

because IDs are unique.

---

Q4. What is Universal Selector?

Answer:

```javascript
$("*")
```

It selects every element in the document.

---

# Summary

✔ ID Selector
✔ Class Selector
✔ Element Selector
✔ Multiple Selector
✔ Universal Selector
✔ Attribute Selector
✔ Descendant Selector
✔ First and Last Selector