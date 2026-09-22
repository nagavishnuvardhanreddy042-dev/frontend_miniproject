const express = require("express");

const app = express();

const PORT = 7600;

app.use(express.json());

let students = [
    { id: 1, name: "Akshara" }
];

// Read students
app.get("/students", (req, res) => {
    res.json(students);
});

// Create student
app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name
    };

    students.push(student);
    res.json(student);
});

// Update student
app.put("/students/:id", (req, res) => {
    const student = students.find(
        item => item.id == req.params.id
    );

    if (student) {
        student.name = req.body.name;
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});

// Delete student
app.delete("/students/:id", (req, res) => {
    students = students.filter(
        item => item.id != req.params.id
    );

    res.send("Student deleted successfully");
});

app.listen(PORT, () => {
    console.log(`CRUD server running at http://localhost:${PORT}`);
});