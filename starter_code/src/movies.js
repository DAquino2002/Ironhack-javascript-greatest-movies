/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){

    let newArray = array.concat();
    
    newArray.sort((a, b) => {
        if(a.year > b.year){
            return 1;
        }
        else if(a.year < b.year){
            return -1;
        }
        else if(a.year === b.year){
           if(a.title > b.title){
               return 1;
           }
           if(a.title < b.title){
               return -1;
           }
        }
        else{
            return 0;
        }
        
    });
    
    return newArray;
    
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    let newList = array.filter(movies => movies.director === "Steven Spielberg");
    return newList.filter(movies => movies.genre.includes("Drama")).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let newArr = array.map((movie) => movie.title);
    let newList = newArr.sort();
    return newList.slice(0,20);

    
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){

    let avgList = array.map(function(rate){
        return rate.rate;
    });
    avgList = avgList.filter(function(element){
        if(element == ' '){
            return 0;
        }
        else{
            return element;
        }
    });
    let total = avgList.reduce(function(a , b){
        return a + b;


    }, 0);
    
    let length = array.length;

    

    avg = (total/length);

    avg = +avg.toFixed(2);

    if(array.length == 0){
        return 0;
    }
     
   

    return  Number(avg);
    
    
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

    let newList = array.filter(function(movies){
        return movies.genre.includes('Drama');
    });


    
    let newAvg = ratesAverage(newList);

    return newAvg;
    



}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    let copy = [...array];

    let minArray = copy.map((eachMovie) => {

        let duration = eachMovie.duration;

        let min = 0;
        let hour = 0;
        let final = 0;
        let temp;
        if (duration.includes('h') && duration.includes('min')) {
            temp = duration.replace('h', ' ').replace('min', ' ').trim();
            let hour = Number(temp.substring(0, temp.indexOf(" ")));
            let min = Number(temp.substring(temp.indexOf(" ") + 1));
            console.log(hour + " " + min)
            final = (hour * 60 + min);

        }
        else if (duration.includes('h')) {
            hour = Number(duration.substring(0, duration.indexOf("h")));
            final = hour * 60;

        }
        else if (duration.includes('min')) {
            min = Number(duration.substring(0, duration.indexOf("min")));
            final = min;
        }

        return {
            title: eachMovie.title,
            year: eachMovie.year,
            director: eachMovie.director,
            duration: final,
            genre: eachMovie.genre,
            rate: eachMovie.rate
        }
    })

    return minArray;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
