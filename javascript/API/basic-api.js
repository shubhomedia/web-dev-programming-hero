  function loadAllData (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayAll(data))
  }

  function displayAll(data){
    // console.log(data);

    for (const users of data){
        console.log(users.name);
    }
  }
