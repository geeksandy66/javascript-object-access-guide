# javascript-object-access-guide
📘 JavaScript Object Access Guide (Beginner Friendly)

## Learn how to access object properties in JavaScript using Dot Notation and Bracket Notation with examples and practice questions.

### 📌 What You Will Learn
Object basics in JavaScript
Dot Notation (.)
Bracket Notation ([])
Dynamic key access 🔥
Practice questions for better understanding


# 🧠 Object Example

const user = {
  name: "Sandeep",
  age: 27,
  "is student": true
};

✅ 1. Dot Notation (Easy & Common)
console.log(user.name); // Sandeep
console.log(user.age);  // 27

✔️ Simple to use
✔️ Most commonly used

❌ Limitation:

console.log(user.is student); // ERROR


✅ 2. Bracket Notation (Flexible)
console.log(user["name"]);        // Sandeep
console.log(user["is student"]);  // true

✔️ Works with spaces & special characters

🔥 3. Dynamic Key Access (Important)
const key = "name";

console.log(user.key);   // undefined ❌
console.log(user[key]);  // Sandeep ✅

### 👉 Explanation:

user.key → looks for "key"
user[key] → uses variable value
🧩 Practice Questions
🔹 Question 1
const student = {
  name: "Rahul",
  age: 20
};

👉 Print name

🔹 Question 2
const user = {
  "full name": "Sandeep Kumar",
  city: "Patna"
};

👉 Print full name

🔹 Question 3
const obj = {
  name: "Amit",
  age: 25
};

const key = "age";

👉 Print age using key variable

🔹 Question 4
const product = {
  title: "Mobile",
  price: 10000
};

👉 Update price to 12000 and print it

🔹 Question 5
const user = {
  name: "Sandeep",
  address: {
    city: "Patna",
    pincode: 800001
  }
};

👉 Print city

✅ Answers
✔️ Answer 1
console.log(student.name);
✔️ Answer 2
console.log(user["full name"]);
✔️ Answer 3
console.log(obj[key]);
✔️ Answer 4
product.price = 12000;
console.log(product.price);
✔️ Answer 5
console.log(user.address.city);

🎯 Key Takeaways
Dot Notation → Simple & fast
Bracket Notation → Flexible & powerful
Use Bracket when working with dynamic keys



🙌 Connect With Me

### Made with ❤️ by VSClass Online

#### Helping beginners master Web Development 🚀
