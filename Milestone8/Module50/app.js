const db = {};
console.log('hello');
const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    saveToDb();
}

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
}

const saveToDb = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJSON);
}
const getDb = () => {
    return db;
}