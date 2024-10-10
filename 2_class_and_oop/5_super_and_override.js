/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    //노래 / 춤 
    part;

    constructor(name, year, part){
        super(name, year);
        this.part = part;
    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`; //this 키워드를 써서 값을 불러와야하
        return `${super.sayHello()} ${this.part}를 맡고있습니다. `;
    } 
}


const yujin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yujin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yujin.sayHello());