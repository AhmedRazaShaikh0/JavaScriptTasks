//               """"Task 2"""""
let name = "Ahmed";
console.log(`Hello ${name}, would you like to learn some Python today?`);


//               """"Task 3"""""
name = "Ahmed";
console.log(name.toUpperCase())
console.log(name.toLowerCase())
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("this is me ahmed raza shaikh "));

//               """"Task 4"""""
let famous_quote = `Muhammad Ali Jinnah once said, "There is no power on earth that can undo Pakistan"`

console.log(famous_quote)

//               """"Task 5"""""

let famous_quote2 = `Muhammad Ali Jinnah once said, "There is no power on earth that can undo Pakistan"`
let famous_person = `Muhammad Ali Jinnah`
let my_msg="He was great Author";
console.log(famous_quote2);
console.log(famous_person +" " + my_msg);

//               """"Task 6"""""
let name2= "Ahmed \n Raza"
console.log(name2)

name2="Ahmed \t Raza";
console.log(name2);



//               """"Task 7"""""
let add=6+2;
let sub=20-12;
let mul=4*2;
let div=24/3;

console.log(`Add ${add} | Sub ${sub} | Mul ${mul} | div ${div}`);

//               """"Task 8"""""
console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);

//               """"Task 9"""""

let fav_num=15;
console.log(`My favourite num is ${fav_num}`);

//               """"Task 10"""""

/* let famous_quote = `Muhammad Ali Jinnah once said, "There is no power on earth that can undo Pakistan"`

console.log(famous_quote) */

//               """"Task 11"""""
let friends=["Raza","Areeb","Hassam","Aliyan"]
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends[3])


//               """"Task 12"""""
console.log(`Arey Meri Jaan ${friends[0]}`)
console.log(`Arey Meri Jaan ${friends[3]}`)
console.log(`Arey Meri Jaan ${friends[1]}`)
console.log(`Arey Meri Jaan ${friends[2]}`)

//               """"Task 13"""""
let transport=["I don't have a car", "I like heavy bikes" , "I would like to own a Audi"];
console.log(transport[0])
console.log(transport[1])
console.log(transport[2])


//               """"Task 14"""""
let guests=["Asif","Riaz","Shahid"]
console.log(`${guests[0]}, Will you join us for dinner tomorrow?`)
console.log(`${guests[1]}, Will you join us for dinner on Wednesday?`)
console.log(`${guests[2]}, Will you join us for dinner Friday?`)

//               """"Task 15"""""
console.log(`${guests[1]} is not able to come at dinner`)
guests[1]="Anas";
console.log(`${guests[0]}, Will you join us for dinner tomorrow?`)
console.log(`${guests[1]}, Will you join us for dinner on Wednesday?`)
console.log(`${guests[2]}, Will you join us for dinner Friday?`)

//               """"Task 16"""""

console.log(`${guests}, We found a bigger table, so we"re inviting some more guests`)
guests.splice(0,0,"Ali")
console.log(guests);
guests.splice(2,0,"Raza")
console.log(guests);
guests.push("Faraz")
console.log(guests);
console.log(`${guests[0]}, Will you join us for dinner tomorrow?`)
console.log(`${guests[1]}, Will you join us for dinner on Wednesday?`)
console.log(`${guests[2]}, Will you join us for dinner Friday?`)
console.log(`${guests[3]}, Will you join us for dinner today?`)
console.log(`${guests[4]}, Will you join us for dinner on Monday?`)
console.log(`${guests[5]}, Will you join us for dinner Tuesday?`)
//               """"Task 17"""""
console.log("You can invite only two people for dinner")
console.log(`${guests[5]}, We’re sorry we can’t invite you to dinner`)
guests.pop()
console.log(`${guests[4]}, We’re sorry we can’t invite you to dinner`)
guests.pop()
console.log(`${guests[3]}, We’re sorry we can’t invite you to dinner`)
guests.pop()
console.log(`${guests[2]}, We’re sorry we can’t invite you to dinner`)
guests.pop()
console.log(`${guests[0]}, Will you join us for dinner tomorrow?`)
console.log(`${guests[1]}, Will you join us for dinner on Wednesday?`)
guests.pop()
guests.pop()
console.log(guests)


//               """"Task 18"""""

let locations=["Venice","Australia","Italy","France","Mexico"]
console.log(locations);
let locations2=[...locations].sort()
console.log(locations2);
console.log(locations);
let locations3=[...locations].reverse()
console.log(locations3);
console.log(locations);
locations.reverse()
console.log(locations);
locations.reverse()
console.log(locations);
locations.sort()
console.log(locations);
locations.reverse()
console.log(locations);

//               """"Task 19"""""
let guest1=guests.length;
console.log(guest1);

//               """"Task 20"""""

let cities=["Karachi","Lahore","Islamabad","Peshawar","Multan","Sialkot"]
for (const lol of cities) {
console.log(lol);
}

//               """"Task 21"""""
let info = {
    firstname: "Ahmed",
    lastname: "Raza",
    age: 19,
    transport: "Motorbike",
    company:"Honda"
  };
  console.log(info);
//               """"Task 22"""""
//           Index Error (Corrected)(Change index numner to see the error)

let cars=["A","B","C","D","E"]
console.log(cars[4]);

//               """"Task 23"""""

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let marks = '800';
console.log("Is marks == '500'? I predict True.")
console.log(marks == '800')

let grade = 'A';
console.log("Is grade == 'A'? I predict True.")
console.log(grade == 'A')

let temperture = '30';
console.log("Is temperture == '30'? I predict True.")
console.log(temperture == '30')

let names = 'Ahmed';
console.log("Is names == 'Ahmed'? I predict True.")
console.log(names == 'Ahmed')

let years = '100';
console.log("Is years == '100'? I predict False.")
console.log(years != '100')

let money = '500';
console.log("Is money == '500'? I predict False.")
console.log(money != '500')

let distance = '200km';
console.log("Is distance == '200km'? I predict False.")
console.log(distance != '200km')

let color = 'Red';
console.log("Is color == 'Red'? I predict False.")
console.log(color != 'Red')

let carss = 'Audi';
console.log("Is carss == 'Audi'? I predict False.")
console.log(carss != 'Audi')

//               """"Task 24"""""

let g ="6"
console.log(" Is g < '6'? I say True")
console.log(g == "6")

let h = "8"
console.log(" Is h > '8'? I say True")
console.log(h >= "8")

let i = '10'
console.log(" Is i < 10? I say True")
console.log(i == '10')

let best = '45'
console.log(" Is best > 45? I say False")
console.log(best != '45')

let better ='12'
console.log(" Is better >= 12? I say False")
console.log(better  != '12')

let good ='23'
console.log(" Is good <= 23? I say False")
console.log(good != '23')


let character = 'HELLO';
if (character == character.toUpperCase()) {
console.log('Upper case true');
}

let character2 = 'hello';
if (character2 == character2.toLowerCase()){
console.log('Lower case true');
}

const A = true,
B = false,
C = 4;

console.log(A && A);
console.log(A && B);
console.log((C > 2) && (C < 2));


const a = true, 
b = false, 
c = 4;


console.log(a || b);
console.log(b || b); 
console.log((c>2) || (c<2));


const aaa = ['a', 'b', 'c'];

if (aaa.includes('b')) {
console.log('Value is in array');
} else {
console.log('value is not in array');
}
const bbb = ['a', 'b', 'c'];

if (bbb.includes('z')) {
console.log('Value is in array');
} else {
console.log('value is not in array');
}
//               """"Task 25"""""
var alien_color='green';
if(alien_color=='green'){
    console.log("The player just earned 5 points");
}
var alien_colors='green';
if(alien_colors=='blue'){
    console.log("The player just earned 5 points");
}
//               """"Task 26"""""
var alien_color2='green';
if(alien_color2=='green'){
    console.log("The player just earned 5 points for shooting the alien");
}else if(alien_color2!='green'){
    console.log("The player just earned 10 points");
}
//               """"Task 27"""""
var alien_color3='green';
if(alien_color3=='green'){
    console.log("The player earned 5 points");
}else if(alien_color3=='yellow'){
    console.log("The player just earned 10 points");
}else if(alien_color3=='red'){
    console.log("The player just earned 15 points");
}
//               """"Task 28"""""
var age = 65;
if(age < 2){
    console.log("the person is a baby");
}else if(age >= 2 && age < 4){
    console.log("the person is a toddler");
}else if(age >= 4 && age < 13){
    console.log("the person is a kid");
}else if(age >= 13 && age < 20){
    console.log("the person is a teenager");
}else if(age >= 20 && age < 65){
    console.log("the person is a an adult");
}else if(age >= 65){
    console.log("the person is a an elder");
}

//               """"Task 29"""""
var favorite_fruits=["Apple","Banana","Orange"]
if(favorite_fruits.includes("Apple")){
    console.log("You really like Apples!");
}if(favorite_fruits.includes("Banana")){
    console.log("You really like Bananas!");
}if(favorite_fruits.includes("Orange")){
    console.log("You really like Oranges!");
}if(favorite_fruits.includes("Mangoe")){
    console.log("You really like Mangoes!");
}if(favorite_fruits.includes("Pear")){
    console.log("You really like Pears!");
}
//               """"Task 30"""""
let users=["admin","ahmed","aliza","usama","uzair","qasim"];
for (let a = 0; a < users.length; a++) {
if (users[a] == "admin")
    console.log("Hello admin, would you like to see a status report?");
else
    console.log(`Hello ${users[a]}, thank you for logging in again.`);
}

//               """"Task 31"""""

users = [];
if (users.length < 1) {
    console.log("We need to find some users!")
}

//               """"Task 32"""""

let current_users = ["ahmed","aliza","faraz","uzair","qasim"];
let new_users = ["ahmed","furqan","usama","uzair","basit"];

new_users.map((gdp) => {
    if (current_users.includes(gdp.toLowerCase())) {
        console.log(gdp,", you will need to enter a new username");
    } else console.log("username is available");
    });
//               """"Task 33"""""
let ord = [1,2,3,4,5,11,12,13,14,15,21,22,23,24,25];
    for (let a = 0; a < ord.length; a++) {
        if (ord[a] === 1) {
            console.log(ord[a] + "st");}
        else if (ord[a] === 2) {
            console.log(ord[a] + "nd");}
        else if (ord[a] === 3) {
            console.log(ord[a] + "rd");}
        else {
            console.log(ord[a] + "th");}
}

//               """"Task 34"""""
let pizza = ['pepperoni', 'tikka', 'veggie' , 'supreme', 'cheese']
    for(let a = 0; a < pizza.length; a++){
        console.log(pizza[a])}
    for(let a = 0; a < pizza.length; a++){
        console.log(`I like ${pizza[a]} Pizza`)
}
console.log(`I love to eat Pizza, My favourite flavours are Chicken Faita , Chicken Tikka and many more. I really love Pizza`);


//               """"Task 35"""""

let animals = ["Dog", "Cat", "Rabbit"];
for(let a = 0 ; a < animals.length ; a++ )
console.log(`A ${animals[a]} would be made a great pet`);
console.log(`Any of these pets would be made a great pet`);

//               """"Task 36"""""
function make_shirt(size, text) {
    console.log(`The size of the shirt should be "${size}" and the message printed on it must be "${text}"`);
}
make_shirt('Large', 'Fly Emirates');

//               """"Task 37"""""
function make_shirt(size = 'Large', text = 'I Lve JavaScript') {
    console.log(`The size of the shirt should be "${size}" and the message printed on it must be "${text}"`);
}

make_shirt();
make_shirt(text = "Medium");
make_shirt('Small', "I Love To eat Biryani");

//               """"Task 38"""""

function describe_city(city, country = "Pakistan"){
    console.log(`${city} is in ${country}`);
};
describe_city("Karachi");
describe_city("Lahore");
describe_city("Istanbul", "Turkey");

//               """"Task 39"""""

function city_country(city, country = "Pakistan"){
    console.log(`"${city}" is in "${country}"`)
}
city_country("Karachi");
city_country("Lahore");
city_country("Istanbul", "Turkey");

//               """"Task 40"""""

function make_album(artist_name, album_title, track = 0){
    console.log({
    "Artist Name": artist_name,
    "Album Title": album_title,
    "track": track,
    });
};
make_album("Laraib", "Onchi Oran");
make_album("Sakeena", "Haseen Waqt");
make_album("Tehreem", "Khubsurat Nazara",45);
make_album("Farzana", "Hamari Mohabbat", 20);

//               """"Task 41"""""

var magicians = ["Peter", "Kyler" , "David", "Paul", "Timpu"];
function show_magicians(magicians){
     console.log(magicians);
};
show_magicians(magicians);

//               """"Task 42"""""
let magician1 = ["Peter", "Kyler" , "David", "Paul", "Timpu"];
function make_great(magician1){
    for (let i = 0; i < magician1.length; i++) {
        console.log("The Great Magician " + magician1[i]);
    }
    
};
make_great(magician1);

//               """"Task 43"""""

let magician2 = ["Peter", "Kyler" , "David", "Paul", "Timpu"];
function make_great(magician2){
    for (let i = 0; i < magician2.length; i++) {
        console.log("The Great Magician " + magician2[i]);
    }
    
};
show_magicians(magicians);
make_great(magician2);

//               """"Task 44"""""

function make_sandwich(...ingredients){
    console.log(`Your ordered Sandwich contains following ingredients:`);
        for(let a = 0; a < ingredients.length; a++){
            console.log(ingredients[a]);
    }
}
make_sandwich("Chicken","Egg","Ketchup")
make_sandwich("Mutton","Egg","Mayounaise")
make_sandwich("Fish","Egg","Yogourt")

//               """"Task 45"""""

function built_car(manufacturer, model, ...Additionals) {
    Extras = {
        "Manfacturer": manufacturer,
        "Model": model,
        "Additionals": Additionals,
    }
    return Extras;
}

cars = built_car('Toyota', 'Corolla', 'Black', "Turbo", "Speakers");
console.log(cars);
