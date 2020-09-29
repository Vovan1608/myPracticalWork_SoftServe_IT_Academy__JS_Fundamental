'use strict';
/*
Для страницы:
<!DOCTYPE html>
<html>
    <head>
        <title>Свойства узлов</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <div>Блок текста №1</div>
        <p>Абзац №1</p>
        <p>Абзац №2</p>
        <div>Блок текста №2</div>
        <p>Абзац №3</p>
        <script>
            var allElements = document.body.children;
            var pElements = [];
            // Ваш код
            alert(pElements.length); // Должно вывести 3
        </script>
    </body>
</html>
1. Используя свойство tagName, выберите из массива allElements 
все элементы <p> и запишите их в массив pElements.
*/

