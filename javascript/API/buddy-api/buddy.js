const buddyData = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data =>displayBuddy(data))
}
buddyData();
const displayBuddy = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesDiv =  document.getElementById('buddies');
    for (const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.name.email}`
        buddiesDiv.appendChild(p);
    }
}