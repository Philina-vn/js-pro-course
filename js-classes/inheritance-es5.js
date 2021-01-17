function Car(name, model, year, color, maxSpeed, fuelCapacity) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;

    this.getFullName = function() {
        return (this.name + ' ' + this.model);
    };

    this.getAge = function() {
        return (2021-this.year + ' year(s) old');
    };

    this.changeColor = function(color){
        if(this.color == color){
            return "Авто уже покрашено в красный цвет"
        }else {
            return ('Поменяли ваш цвет на:' + `${this.color}`)
        }
    }

    this.calculateWay = function(kilometers, fuel){
        if (fuel<10) {
            console.log('Пополните запас топлива');
        }
    }
}

const bmw = new Car('bmw', 'X7', 2019, 'black');
console.log(
    bmw.getFullName(),
    bmw.getAge(),
    bmw.changeColor()
);

const mercedes = new Car('mercedes', 'CLA', 2019, 'red');
console.log(
    mercedes.getFullName(),
    mercedes.getAge(),
    mercedes.changeColor()
);

const audi = new Car('audi', 'A7', 2019, 'blue');
console.log(
    audi.getFullName(),
    audi.getAge(),
    audi.changeColor()
);
