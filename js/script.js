/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (numberOfFilms < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
            console.log('Вы классический зритель');
        } else if (numberOfFilms >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {

            const film = prompt('Один из последних просмотренный фильмов');
            const score = prompt('На сколько оцените его?');
    
            if (film != null && score != null && film.trim() != '' && score.trim() != '' && film.trim().length < 50) {
                personalMovieDB.movies[film] = score;
            } else {
                i--;
            }
    
        }
    },
    writeYourGenres: function(genres) {
        
        for (let i = 0; i < 3; i++) {
            
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (genre == null || genre.trim() == '') {
                i--;
                continue;
            } else {
                genres.push(genre);
            }

        }

        genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });

    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
