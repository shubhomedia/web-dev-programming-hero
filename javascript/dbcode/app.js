const db = {};

const addToDb = item => {
    const db =getDb();
    db[item]= 1;
}


const getDb = () =>{
    return db;
}