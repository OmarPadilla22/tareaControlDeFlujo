/*-----------------------------------------------------------------------------------------------------------
Exercise #1
We'll build the industry plant calendar from the opening exercise.

Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

function businessHours(dayNumber, hourNumber)

Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).*/

function businessHours(dayNumber, hourNumber){
    var dayNumber = parseInt(prompt("Ingrese el numero del dia de la semana que quieres consultar. (Considera que domingo es el dia 0)"));
    var hourNumber = parseInt(prompt("Ingrese la hora que quiere consultar. (Considera las horas del 0 al 24)"));

    if (dayNumber >= 1 && dayNumber <= 6 && hourNumber >= 9 && hourNumber <= 18){
        alert(true)
    }else alert(false)
}

//businessHours();

//-------------------------------------------------------------------------------------------------------------



/*-------------------------------------------------------------------------------------------------------------

Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7.*/

function getDayNumber(janFirstDayNumber, yearDayNumber){
    var yearDayNumber = parseInt(prompt("Ingrese dia del año que quiere consultar."));
    var janFirstDayNumber = new Date (2021, 0 ,yearDayNumber);

    var dia = janFirstDayNumber.getDay();

    if (dia == 1){
        alert("El dia que escogiste fue lunes el año pasado");
    } else if (dia == 2){
        alert("El dia que escogiste fue martes el año pasado");
    }else if (dia == 3){
        alert("El dia que escogiste fue miercoles el año pasado");
    }else if (dia == 4){
        alert("El dia que escogiste fue jueves el año pasado");
    }else if (dia == 5){
        alert("El dia que escogiste fue viernes el año pasado");
    }else if (dia == 6){
        alert("El dia que escogiste fue sabado el año pasado");
    }else alert("El dia que escogiste fue domingo el año pasado");
}

//getDayNumber();

//---------------------------------------------------------------------------------------------------------------------


/*----------------------------------------------------------------------------------------------------------------------

Part 3

Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.*/

function servicio (yearDayNumber, hourNumber, dayNumber, day){

    var yearDayNumber = parseInt(prompt("Ingrese dia del año que quiere consultar."));
    var hourNumber = parseInt(prompt("Ingrese la hora que quiere consultar. (Considera las horas del 0 al 24)"));
    var dayNumber = new Date (2022, 0 ,yearDayNumber);
    var day = dayNumber.getDay();
    
     
    if (day >= 1 && day <= 5 && hourNumber >= 9 && hourNumber <= 18){
        alert(true)
    }else alert(false)
}

//servicio();