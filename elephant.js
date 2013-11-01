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
console.log(e.getAge());

// Afer one year. Please assume :p
e.setAge(11);
console.log(e.getAge());