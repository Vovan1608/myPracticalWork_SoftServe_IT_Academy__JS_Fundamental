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
        console.log(response);
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
    .then((response) => console.log(response))
    .catch((err) => console.log(err))