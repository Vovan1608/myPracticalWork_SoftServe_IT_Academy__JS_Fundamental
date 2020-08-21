'use strict';

var company ={
    employees: [
        {
            name: "John",
            age: 28,
            experience: 1,
            languages: ["Java", "JavaScript", "SQL"]
        },

        {
            name: "Bill",
            age: 30,
            experience: 5,
            languages: ["HTML", "CSS", "JavaScript"]
        },

        {
            name: "Mike",
            age: 32,
            experience: 4,
            languages: ["Python", "SQL"]
        }
    ]
}

console.log(company);
console.log(company.employees[1].languages[2]);