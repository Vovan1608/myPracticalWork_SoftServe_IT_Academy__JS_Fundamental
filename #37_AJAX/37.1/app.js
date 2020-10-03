'use strict';
/*
Создайте цепочку из трех запросов (т.е. следующий запрос должен 
    отправляться, только после того, как выполнится текущий) при 
    помощи Fetch:
1. Получите данные по url: https://reqres.in/api/users/5;
2.Создайте данные c произвольными значениями по url: https://reqres.in/api/users/;
3. Получите данные по url: https://reqres.in/api/users/10.
*/


fetch("https://reqres.in/api/users/5")
    .then((response) => {
        return response.json();
    })
    .then( (data) => {
        console.log(data);
        return fetch("https://reqres.in/api/users/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    })
    .then((response) => {
        console.log(response);
        return fetch("https://reqres.in/api/users/10")
    })
<<<<<<< HEAD
    .then((response) => {
        response.json();
        console.log(response);
=======
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        console.log(data);
>>>>>>> 6f7e5baf951cea9518683d11de3f9516307fe0df
    })
    .catch((err) => console.log(err))


// async function getData () {
    
//     let response = await fetch ("https://reqres.in/api/users/5");
    
//     let data = await response.json();
    
//     return data;
// }

// async function postData() {
//     let post = await fetch("https://reqres.in/api/users/", {
//         method: "POST",
//         body: JSON.stringify(getData()),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
// }

// let g = getData();
// console.log(g)
