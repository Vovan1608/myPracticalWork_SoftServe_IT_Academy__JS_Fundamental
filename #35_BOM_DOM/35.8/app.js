'use strict';
/*
Для страницы:
<!DOCTYPE html>
<html>
    <head>
        <title>Поиск узлов</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <form name="search">
            <label>Поиск по сайту: <input type="text" name="search" /></label>
            <input type="submit" value="Искать!" />
        </form>
        <hr />
        <form name="search-person">
            Поиск по посетителям:
            <table id="age-table">
                <tr>
                <td>Возраст:</td>
                <td id="age-list">
                    <label><input type="radio" name="age" value="young" />до 18</label>
                    <label><input type="radio" name="age" value="mature" />18-50</label>
                    <label><input type="radio" name="age" value="senior" />более 50</label>
                </td>
                </tr>
                <tr>
                <td>Дополнительно:</td>
                <td>
                    <input type="text" name="info[0]" />
                    <input type="text" name="info[1]" />
                    <input type="text" name="info[2]" />
                </td>
                </tr>
            </table>
            <input type="submit" value="Искать!" />
        </form>
        <script>
            // Ваш код
        </script>
    </body>
</html>
Найдите (получите в переменную):
1. Все элементы <label> внутри таблицы. Должно быть 3 элемента;
2. Первую ячейку таблицы (с текстом Возраст:);
3. Вторую форму в документе;
4. Форму с именем "search", без использования её позиции в документе;
5. Элемент <input> в форме с именем "search";
6. Элемент с именем "info[0]", без точного знания его позиции в документе;
7. Элемент с именем "info[0]", внутри формы с именем "search-person";
8. Выведите значения переменных на экран.
*/

