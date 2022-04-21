const fs = require('fs')

const textbook={
    "course_table" : [
        {"name" : "미분방정식", "id" : "MATH202"},
        {"name" : "응용선형대수", "id" : "MATH203"},
        {"name" : "신호및시스템", "id" : "EECE233"},
        {"name" : "회로이론", "id" : "EECE231"}
    ]
}

const textbookJson = JSON.stringify(textbook)

fs.writeFileSync("textbook.json",textbookJson)