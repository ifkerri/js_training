/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

start();
detectPersonalLevel(0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();

let writeYourGenres = function writeYourGenres(genres) {

    for (let i = 0; i < 3; i++) {
        genres.push(prompt(`Ваш любимый жанр под номером ${i + 1}`));   
    }

};

writeYourGenres(personalMovieDB.genres);
showMyDB();

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');    
    }

}

function showMyDB() {

    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);    
    }

}

function rememberMyFilms() {
  
    for (let i = 0; i < 2; i++) {

        const film = prompt('Один из последних просмотренный фильмов');
        const score = prompt('На сколько оцените его?');
    
        if (film != null && score != null && film.trim() != '' && score.trim() != '' && film.trim().length < 50) {
            personalMovieDB.movies[film] = score;
        } else {
            i--;
        }
    
    }
    
}

function detectPersonalLevel() {

    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }    

}

//console.log(personalMovieDB);