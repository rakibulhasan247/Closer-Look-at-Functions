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

document.body.addEventListener('click', high5);