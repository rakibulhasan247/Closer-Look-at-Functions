'use strict';

/* 
const bookings = [];
const createBooking = function(flightNum,numPassengers=1, price= 199 * numPassengers){
    const booking ={
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};


createBooking('LH123');
createBooking('LH123',2,550);
createBooking('LH123',5);
createBooking('LH123', undefined,500); */



/* 
const flight = 'LH234';
const hridoy = {
    fullName: 'Rakibul Hasan Redoy',
    passport: 28655495,
};

const checkIn = function(flightNum, passenger){
    flightNum ='LH999';
    passenger.fullName = 'Mr. ' + passenger.fullName;
    if(passenger.passport === 28655495){
        alert('Checked in')
    }  else{
        alert('Wrong passport!')
    }
};


checkIn(flight,hridoy);
console.log(flight);
console.log(hridoy); 

const flightNum =flight;
const passenger = hridoy;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000000);

}

newPassport(hridoy);
checkIn(flight, hridoy); */

/* 
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();

};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};

//High-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Rakibul never gives up', upperFirstWord);

transformer('Rakibul never gives up', oneWord);


const high5 = function(){
    console.log('✋');
};

document.body.addEventListener('click', high5); */
/* 

const greet = function(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`);
    };
};

const greeterHey = greet('Hey');

greeterHey("Hridoy");

greet('Hi')('Riyad');

const greetArr = greeting => name => {
    console.log(`${greeting}, ${name}`);
};

greetArr('Hi')('Riyad'); */


/* 
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    //book:funtion(){}

    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.booking.push({flight: `${this.iataCode}${flightNum}`,name})
    },
};

lufthansa.book(239,'Rakibul Hasan');
lufthansa.book(786,'Riayd Hasan');

console.log(lufthansa.booking);

const eurowings = {
    airline: 'Eurowings',
    iataCode:'EW',
    booking:[],
};

const book = lufthansa.book;

//not work
//book(eurowings, 23,'Rakibul Hasan');


//Call Method
book.call(eurowings, 23,'Maria Hasan');
console.log(eurowings);

const bdAir = {
    airline: 'Bangladesh Airlines',
    iataCode:'BDAir',
    booking:[],
};

book.call(bdAir,78,'Rakibul Hasan');
console.log(bdAir);
//Apply method
const flightData = [655, 'Ainin'];

book.apply(bdAir,flightData);
console.log(bdAir);

book.call(bdAir,...flightData);


const bookEW = book.bind(eurowings);
bookEW(23,'Steven Williams');

const bookLH = book.bind(lufthansa);
const bookBD = book.bind(bdAir);

bookBD(58,'Mehedi Hasan');

const bookBD58 = book.bind(bdAir, 58);

bookBD58('Nafess Hasan');
bookBD58('Rocky Hasan');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
  
    this.planes++;
    console.log(this.planes);
};

lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


//Partial application
const addTax = (rate, value) => value - value * rate;
console.log(addTax(0.2,525)); 

*/
/* 
const bdfly = {
    airline: 'Fly BD',
    iataCode:'BDFLY',
    bookings:[],
    book(flightNum, fullName){
        console.log(
            `${fullName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({Flight: `${this.iataCode}${flightNum}`, fullName});
    },
};

bdfly.book(258, 'Rakibul Hasan Redoy');
bdfly.book(228, 'Sabiha Islam Himi');

console.log(bdfly);


const airIndia = {
    airline: 'Air India',
    iataCode:'AI',
    bookings:[],
};

const book = bdfly.book;

book.call(airIndia, 253,'Riyad Hasan');
console.log(airIndia);

const flightData = [678,'Mehedi Hasan'];

book.call(airIndia, ...flightData);
console.log(airIndia);

const bookAI = book.bind(airIndia);
bookAI(23, 'Steven Williams');
console.log(airIndia);

const bookAI58 = book.bind(airIndia, 58);

bookAI58('Hridoy Hasan');
console.log(airIndia);

airIndia.planes = 200;
airIndia.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

airIndia.buyPlane();

document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.bind(airIndia));


const runOnce = function () {
    console.log('This will never run again');
};

runOnce();
(function () {
    console.log('This will never run again');
}());

(() => console.log('This will also never run again'))();


 */

/* 

const secureBooking = function(){
    let passengerCount =0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();

*/ 

let f;


const g = function() {
    const a =23;
    f = function(){
        console.log(a*2);
    };
};


const h = function() {
    const b =50;
    f = function(){
        console.log(b*2);
    };
};


g();
f();
console.dir(f);

h();
f();
console.dir(f);

//Example 2

const boardPassengers = function(n,wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);

        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);

};

const perGroup = 1000;
boardPassengers(180,3);