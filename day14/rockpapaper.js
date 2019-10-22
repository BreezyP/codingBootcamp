// rock paper scizzors game

let rand = function() {
    let choice = Math.random() * 3 + 1 | 0;

    switch(choice){
        case 1:{return 'rock';}
        case 2:{return 'scizzors';}
        case 3:{return 'paper';}
    }

};

// let player make a choice
let playerChoice = function(){
    let player = parseInt(prompt('1. Rock\n2. Paper\n3. Scizzors'));

    switch(player){
        case 1:{return 'rock';}
        case 2:{return 'scizzors';}
        case 3:{return 'paper';}
    }
};

//decide who won

let match = function (choice) {

    let player = playerChoice();
    let pc = rand();



    if(player === pc){
        alert('You got a draw');
    } else if(player === 'rock' && pc === 'paper' || player === 'scizzors' && pc === 'rock' ||
    player === 'paper' && pc === 'scizzors'){alert('You lost!')}
    else{
        alert('You won!');
    }

};

match();

