var car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

console.log(car);

var cartype = car.type;
console.log(cartype);
car.type = "New Model";
var cartype = car.type;
console.log(cartype);

// Diffrent type of Property set methods 
car.type = "New Model";
car["type"] = "Latest Model";
car[car.type] = "Latest model 2";