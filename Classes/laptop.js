class Laptop {
    isOn = false;

    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    get price() {
        const currentPrice = 800 - (this.info.age * 2) + (this.quality * 0.5);

        return currentPrice;
    }

    showInfo() {
        let resultToJson = JSON.stringify(this.info);

        return resultToJson;
    }
}

let info = {producer: 'Asus', age: 2, brand: 'Zenbook'}
let laptop = new Laptop(info, 10)
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);