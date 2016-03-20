// 1. Write a method called shout on the String prototype that returns the
// string in all capital letters and adds 5 exclamation points.

// write your code here
String.prototype.shout = function() {
	return this.toUpperCase() + '!!!!!';
}

console.assert('I like unicorns'.shout() === 'I LIKE UNICORNS!!!!!', 'expected to really like unicorns')
console.assert('Aaron likes nutella'.shout() === 'AARON LIKES NUTELLA!!!!!', 'expected to aaron to really like nutell')
console.assert('Prototypes make sharing easy'.shout() === 'PROTOTYPES MAKE SHARING EASY!!!!!', 'expected prototypes to share really well')

// 2. Overwrite the 'toString' method on all objects so that it returns keys
// and values on that object.

// myObj = {hello: 'world', goodbye: 'blue monday'}


Object.prototype.toString =  function() {
	// tell the object this method applies to it
	var obj = this;
	// create an empty string
	var text = '';
	// iterate over the object
	for (var prop in obj) {
		// create a string that includes key and values separated by colons and separates pairs with a comma.
		text += prop + ': ' + obj[prop] + ', ';
	}
	// return a substring that removes the last comma and space from the string.
	return text.substr(0, text.length - 2);
	
}


var aSimpleObject = {color: 'pink', number: 57}
var aUnicorn = {color: 'irridescent', hornType: 'rainbow', age: 23926094 }
console.assert(aSimpleObject.toString() === 'color: pink, number: 57');
console.assert(aUnicorn.toString() === 'color: irridescent, hornType: rainbow, age: 23926094');

// 3. Write a constructor that allows you to create Characters for a fictional
// video game. Each character should have a name, a health (number), and a
// special skill (string).

function Character(name, health, skill) {
	this.name = name;
	this.health = health;
	this.skill = skill;
}

// 4. Add a method to your Character prototype that enables the created
// characters to heal themselves (aka, their health value goes up)

 Character.prototype.heal = function() {
 	this.health++;
 	console.log(this.health);
 }

// 5. Add a method to your Character prototype that enables the created
// characters to attack another character. The method should accept one
// argument, which should be a created character. It should decrease the health
// number of that other character. 

Character.prototype.attack = function(enemy) {
	enemy.health--;
}

// Character.prototype

// 6. Create a constructor that creates a Super Character. It should inherit
// all the properties of a normal character, and should be able to use all
// methods on the Character prototype

function SuperCharacter(name, health, skill) {
	Character.call(this, name, health, skill);
}

SuperCharacter.prototype = Object.create(Character.prototype)

// 7. Add a method to the Super Character prototype that allows it to destroy
// another character in one fell swoop. It should accept one argument (a
// character) and reduce their health to zero, no matter what their health was
// going in. This method SHOULD NOT be available for normal characters, only
// super characters.
SuperCharacter.prototype.destroy =  function(enemy) {
	enemy.health = 0;
}

// dana = new Character('dana', '3', 'potions')
// milo = new SuperCharacter('Milo', 7, 'mind control')
