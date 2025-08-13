# Day Sum Solution

## 📌 Problem Statement
Given a dictionary `D` where:
- Key: `YYYY-MM-DD` date format
- Value: integer value for that date

Return a new dictionary where:
1. Keys are **day names** (`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`).
2. Values are the **sum of all values** for that day.
3. If a day is missing, calculate it as the **mean of the previous and next available day's values**.

---

## 🚀 Example
**Input:**
```json
{
    "2020-01-01": 4,
    "2020-01-02": 4,
    "2020-01-03": 6,
    "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -2
}
```

**Output:**
```json
{
    "Mon": -6,
    "Tue": 2,
    "Wed": 2,
    "Thu": 4,
    "Fri": 6,
    "Sat": 8,
    "Sun": 2
}
```

---

## 🛠 Installation & Running Tests
```bash
npm install
npm test
```

---

## 📂 Project Structure
```
day-sum-solution/
│
├── package.json
├── README.md
├── solution.js
└── solution.test.js
```

---

## ✅ Tech Stack
- JavaScript (Node.js)
- Jest (Unit Testing)
