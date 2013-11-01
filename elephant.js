// The Stage+Characters
// --------------------

function Elephant () {
	this.name = 'Gajanan';
	this.age = 10;

	this.setAge = function (age) {
		this.age = age
	}
	
	this.getAge = function () {
		return this.age;
	}
}

// The Play
// --------

var e = new Elephant();
console.log('Hello! I am %s.', e.name);
console.log('I am %s year(s) old.', e.getAge());

// Afer one year. Please assume :p
console.log(' ~~~ A year has gone by ... ~~~ ')
e.setAge(11);
console.log('I am %s year(s) old.', e.getAge());