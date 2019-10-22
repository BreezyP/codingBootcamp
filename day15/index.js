function anagram(str1, str2){

    let fc1 = {};
    let fc2 = {};

    for(let i of str1){
        fc1[i] = (fc1[i] || 0) +1;
    }

    for(let i of str2){
        fc2[i] = (fc2[i] || 0) +1;
    }

    //check if the key exists
    for(let key in fc1){
        if(!(key in fc2)){
            return false;
        }

        if(fc1[key] !== fc2[key]){
            return false;
        }
    }
    return true;

    //check if the frequency is the same


}

console.log(anagram('aaz', 'zza'));
console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('awesome', 'awesom'));
console.log(anagram('qwerty', 'qeywrt'));
console.log(anagram('texttwisttime', 'timetwisttext'));
console.log(anagram('boo', 'obo'));