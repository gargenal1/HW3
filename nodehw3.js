var express = require('express')
var app = express()
const fs = require('fs');

var jsonArray = [
    {
      "dept_no": "d009",
      "dept_name": "Customer Service"
    },
    {
      "dept_no": "d005",
      "dept_name": "Development"
    },
    {
      "dept_no": "d002",
      "dept_name": "Finance"
    },
    {
      "dept_no": "d003",
      "dept_name": "Human Resources"
    },
    {
      "dept_no": "d001",
      "dept_name": "Marketing"
    },
    {
      "dept_no": "d004",
      "dept_name": "Production"
    },
    {
      "dept_no": "d006",
      "dept_name": "Quality Management"
    },
    {
      "dept_no": "d008",
      "dept_name": "Research"
    },
    {
      "dept_no": "d007",
      "dept_name": "Sales"
    }
  ]
  
fs.writeFileSync('departments.json', JSON.stringify(jsonArray));
var contents = fs.readFileSync('departments.json', 'utf8');

app.get('/', function (req, res) {
    res.sendFile('HW3 Heroku.html' , { root : __dirname});
});
app.get('/json', function (req, res) {
    return res.json(contents)
});
app.listen(process.env.PORT || 8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on " + process.env.PORT);
    }
});