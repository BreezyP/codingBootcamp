function Person(firstname, lastname){
    this.firsname = firstname;
    this.lastname = lastname;
}

function Other(firstname, lastname, middlename){
    Person.call(this, firstname, lastname);
    this.middlename = middlename;
}

let lily = new Other('lillian', 'garcia', 'rose');

console.log(lily);

function test(){
    let x = 42;
    function getX(){
        return this.x;
    }
}

let thing = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

let getter = thing.getX;
console.log(getter());

let better = getter.call(thing);
console.log(better);

var a = [];
(function () {
    'use strict';
    for (var i = 0; i < 5; ++i) { // *** `let` works as expected ***
        a.push( function() {return i;} );
    }
} ());
console.log(a.map( function(f) {return f();} ));


//adjective
//adjective
//type of bird
//room in the house
//verb past tense
//verb
//relative's name
//noun
//aliquid
//verb ending in ing
//part of the body (plural)
//plural noun
//verb ending in ing
//noun

function question(thing){
    return prompt(`Please give me a ${thing}`);
}


let one = question('adjective');
let two = question('adjective');
let three = question('type of bird');
let four = question('room in the house');
let five = question('verb in past tense');
let six = question('verb');
let seven = question('relative\'s name');
let eight = question('noun');
let nine = question('liquid');
let ten = question('verb ending in ing');
let eleven = question('part of the body');
let twelve = question('plural noun');
let thirteen = question('verb ending in ing');
let fourteen = question('noun');

let lib = `It was a ${one};, cold November day. I woke up to the ${two} smell of ${three} roasting in the ${four} downstairs.
I ${five} down the stairs to see if I could help ${six} the dinner. My mom said, "See if ${seven} needs a fresh ${eight}." 
 So I carried a tray of glasses full of ${nine} into the ${ten} room. When I got there, I couldn't believe my ${eleven}!
 There were ${twelve} ${thirteen} on the ${fourteen}`;

console.log(lib);







