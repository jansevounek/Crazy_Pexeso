let car_map;
let pair_map;
let turned_cards = 0;
let turned_card1;
let turned_card2;
let win = 0;
 
function start(){
    generate();
}
 
function clickCard(code){
    console.log("code: " + code)
    turnCard(code);
 
    if (turned_cards == 2){
        turned_cards = 0;
        setTimeout(checkPair, 1000);
    }
}
 
function turnCard(code){
    loop1:
    for (let u = 1; u < 5; u++){
        for (let f = 1; f < 5; f++){
            if (code == u + "_" + f){
                document.getElementById("card" + u + "_" + f).innerHTML = car_map[code];
 
                if (turned_cards == 0){
                    turned_card1 = u + "_" + f;
                    turned_cards++;
                } else {
                    turned_card2 = u + "_" + f;
                    turned_cards++;
                }
                break loop1;
            }
 
            if (code == u + "" + f){
                console.log(u + "" + f)
                document.getElementById("card" + u + "_" + f).innerHTML = car_map[u + "_" + f];
 
                if (turned_cards == 0){
                    turned_card1 = u + "_" + f;
                    turned_cards++;
                } else {
                    turned_card2 = u + "_" + f;
                    turned_cards++;
                }
                break loop1;
            }
        }
    }
}
 
function checkPair(){
    console.log("one: " + turned_card1);
    console.log("two: " + turned_card2);
 
    if (pair_map[turned_card1] == turned_card2){
        document.getElementById("card" + turned_card1).innerHTML = "<img src = Img/Done.png onClick = none()>";
        document.getElementById("card" + turned_card2).innerHTML = "<img src = Img/Done.png onClick = none()>";
        win = win + 1;
 
    } else {
        document.getElementById("card" + turned_card1).innerHTML = "<img src = Img/Back.png onClick = clickCard("+ turned_card1 +")>";
        document.getElementById("card" + turned_card2).innerHTML = "<img src = Img/Back.png onClick = clickCard("+ turned_card2 +")>";
    }
    if (win == 8) {
        let test = document.getElementById("test");
        test.innerHTML = "<button onclick = restart()>restart</button>";
        let field = document.getElementById("field");
        field.innerHTML = "<h1>you won</h1><img src = Img/you_won.jpg>"
    }
}
 
function generate(){
    car_map = {};
    pair_map = {};
    let one;
    let two;
 
    for (let k = 1; k < 9; k++){
        
        while(true){
            let x = Math.floor(Math.random() * 4) + 1;
            let y = Math.floor(Math.random() * 4) + 1;
 
            if (!(y + "_" + x in pair_map)){
                one = y + "_" + x;
                console.log(k + ") prvni: " + one)
                break;
            }
        }
 
        while(true){
            let x = Math.floor(Math.random() * 4) + 1;
            let y = Math.floor(Math.random() * 4) + 1;
 
            if (!(y + "_" + x in pair_map) && (y + "_" + x) != one){
                two = y + "_" + x;
                console.log(k + ") druhy: " + two)
                break;
            }
        }
 
        pair_map[two] = one;
        pair_map[one] = two;
 
        if (k < 6){
            car_map[one] = "<img src = Img/Car"+ k +".png onClick = none()>";
            car_map[two] = "<img src = Img/Car"+ k +".png onClick = none()>";
        } else {
            car_map[one] = "<img src = Img/Car"+ k +".jpg onClick = none()>";
            car_map[two] = "<img src = Img/Car"+ k +".jpg onClick = none()>";
        }
        one = 0;
        two = 0;
    }
    test.innerHTML = "done";
}
 
function restart(){
    location.reload();
}
 
function none(){}
