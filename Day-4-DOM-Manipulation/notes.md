# Day 4 - DOM Manipulation

## What is DOM?

DOM stands for Document Object Model.

The DOM represents the HTML document as a tree structure.

Using jQuery, we can:

- Change text
- Change HTML
- Read input values
- Add elements
- Remove elements
- Update content dynamically

---

# 1. text()

Used to get or set text content.

Syntax:

```javascript
$("#heading").text("Welcome");
```

Example:

```javascript
$("#heading").text("Hello Aman");
```

---

# 2. html()

Used to get or set HTML content.

Syntax:

```javascript
$("#heading").html("<span>Hello</span>");
```

Example:

```javascript
$("#heading").html("<b>Hello Aman</b>");
```

Difference:

text()

```javascript
$("#heading").text("<b>Hello</b>");
```

Output:

<b>Hello</b>

html()

```javascript
$("#heading").html("<b>Hello</b>");
```

Output:

Hello (Bold)

---

# 3. val()

Used to get or set input values.

Get Value:

```javascript
$("#name").val();
```

Set Value:

```javascript
$("#name").val("Aman");
```

---

# 4. append()

Adds content at the end.

```javascript
$("#list").append("<li>React</li>");
```

Before:

HTML CSS

After:

HTML CSS React

---

# 5. prepend()

Adds content at the beginning.

```javascript
$("#list").prepend("<li>JavaScript</li>");
```

---

# 6. before()

Adds content before an element.

```javascript
$("#heading").before("<hr>");
```

---

# 7. after()

Adds content after an element.

```javascript
$("#heading").after("<hr>");
```

---

# 8. remove()

Removes an element completely.

```javascript
$("#heading").remove();
```

---

# 9. empty()

Removes only inner content.

```javascript
$("#list").empty();
```

---

# 10. replaceWith()

Replace one element with another.

```javascript
$("#heading").replaceWith("<h2>New Heading</h2>");
```

---

# Mini CRUD Example

Create Item

```javascript
$("#list").append("<li>Item</li>");
```

Read Item

```javascript
$("#list").text();
```

Update Item

```javascript
$("#item").text("Updated");
```

Delete Item

```javascript
$("#item").remove();
```

---

# Interview Questions

Q1. Difference between text() and html()?

Answer:

text() works with plain text.

html() works with HTML tags.

---

Q2. Difference between remove() and empty()?

Answer:

remove() removes the entire element.

empty() removes only child content.

---

Q3. What is val()?

Answer:

Used to get or set form values.

---

Q4. Difference between append() and prepend()?

Answer:

append() adds at end.

prepend() adds at beginning.

---

Q5. Why is DOM Manipulation important?

Answer:

It allows dynamic UI updates without refreshing the page.

---

# Summary

✔ text()

✔ html()

✔ val()

✔ append()

✔ prepend()

✔ before()

✔ after()

✔ remove()

✔ empty()

✔ replaceWith()

✔ Mini CRUD Example