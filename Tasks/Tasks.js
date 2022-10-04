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
let users=["admin","ahmed","ali","usama","uzair","qasim"];
function usercheck(name) {
    let admin="admin";
    users.forEach(element => {
            
         if(admin==element && name==element){
            console.log("Hello admin, would you like to see a status report?"); 
         }
         else if(name==element){
             console.log(`Hello ${name}, thank you for logging in again.`);
         }
        
   }
);
    }
usercheck("admin");



