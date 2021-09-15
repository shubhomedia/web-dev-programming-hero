  function loadAllData (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayAll(data))
  }

  function displayAll(data){
    // console.log(data);
    const ul = document.getElementById("users");
    for (const users of data){
        console.log(users.name);
        const li = document.createElement('li');
        li.innerText = `User Name ${users.name} and   Email:   ${users.email}`;
        ul.appendChild(li);
    }
  }
