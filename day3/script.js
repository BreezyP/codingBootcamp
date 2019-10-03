fetch('https://jsonplaceholder.typicode.com/users/2')
.then(result =>{
    console.log(result);
    return result.json();
})
    .then(data => {
        console.log(data);
    })
.catch(error => console.log(error));

async function thingAW(){
    const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await result.json();
    console.log(`name: ${data.name}
    username: ${data.username}
    email: ${data.email}`);

}

thingAW();

async function apitest(){
    const userInput = document.querySelector('.api').value;
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userInput}`);
    const data = await result.json();
    console.log(data.email);
    document.querySelector('.name').value = data.name;
    document.querySelector('.username').value = data.username;
    document.querySelector('.email').value = data.email;
}

apitest();