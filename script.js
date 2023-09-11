/* elements selection */
let cont1 = document.getElementById('container1')
let cont2 = document.getElementById('container2')
/* create html elements */
let countdown = document.createElement('h3')
countdown.id = 'countdown'
cont1.append(countdown)
let statement = document.createElement('h3')
statement.id = 'statement'
cont2.append(statement)


window.onload = function () {
    countdown.innerHTML = 10;
    setTimeout(function () {
        countdown.innerHTML = 9;
        setTimeout(function () {
            countdown.innerHTML = 8;
            setTimeout(function () {
                countdown.innerHTML = 7;
                setTimeout(function () {
                    countdown.innerHTML = 6;
                    setTimeout(function () {
                        countdown.innerHTML = 5;
                        setTimeout(function () {
                            countdown.innerHTML = 4;
                            setTimeout(function () {
                                countdown.innerHTML = 3;
                                setTimeout(function () {
                                    countdown.innerHTML = 2;
                                    setTimeout(function () {
                                        countdown.innerHTML = 1;
                                        setTimeout(function () {
                                            countdown.style.visibility = "hidden";
                                            statement.innerHTML = 'Happy Independance Day';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000); 
};

