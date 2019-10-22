/*
1. build a tournament app that will:
1. take in team names and seeds
2. print out the team names by seed order
3. list the matchups in order
4.
 */

const data = new Map();
let totalSeeds = [];



const teams = prompt('How many teams are in the tournament?');
console.log(`There are ${teams} teams in the tournament.`);

for(let i = 0; i < teams; i++){
    totalSeeds[i] = i + 1;
}

for(let i = 0; i < teams; i++){
    let name = prompt(`What is the team name?`);
    let seed = parseInt(prompt(`For team name: ${name} what is their seed?`));

    data.set(seed, name);
    totalSeeds[seed - 1] = null;

    console.log(`These are the available seeds: ${totalSeeds}`);
    console.log(data.get(1));


}
/*
data.set(1, 'rockets');
data.set(2, 'lala\'s');
 */

//list the teams in order
function inOrder(){
    for(let i = 0; i < data.size; i++){
        console.log(`Team: ${data.get(i + 1)} is seed number ${i + 1}`)
    }
}

inOrder();

//list the match ups in order
function matchUps(){
    if(data.size % 2 === 1){
        console.log(`Team ${data.get(1)} gets a bye.`);
        for(let i = 1; i < data.size; i+=2){
            console.log(`Team ${data.get(i + 1)} is matched up with ${data.get(i + 2)}`);
        }
    } else {
        for(let i = 0; i < data.size; i+=2){
            console.log(`Team ${data.get(i + 1)} is matched up with ${data.get(i + 2)}`)
        }
    }
}

matchUps();

//build an inventory





