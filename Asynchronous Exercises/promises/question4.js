/*
Task: Write a function named `getActiveStudentsByCourse()` that returns a Promise.
Using the students array below, return a new list that satisfies the following conditions:

- Include only students who:
    - are active
    - have a grade of 70 or higher
- Remove duplicate students based on their id.
- Group the remaining students by course using a Map.
- Sort the student names alphabetically within each course.
*/
function getActiveStudentsByCourse(arr){
    return new Promise((resolve,reject)=>{
		const receiver = arr
						  .filter(item => item.active && item.grade > 70)
						  .filter((it, index, arr)=>{
							 return arr.findIndex(u => u.id === it.id) === index
						  })
						  .sort((a,b)=> a.name.localeCompare(b.name));
		resolve(receiver);
	})
}

const students = [
	{
	id: 1,
	name: "Alice",
	grade: 85,
	active: true,
	courses: ["Math", "Science"]
	},
	{
	id: 2,
	name: "Bob",
	grade: 65,
	active: true,
	courses: ["Math"]
	},
	{
	id: 1,
	name: "Alice",
	grade: 85,
	active: true,
	courses: ["Math", "Science"]
	},
	{
	id: 3,
	name: "Charlie",
	grade: 92,
	active: false,
	courses: ["Science"]
	},
	{
	id: 4,
	name: "David",
	grade: 78,
	active: true,
	courses: ["Math", "History"]
	}
];
getActiveStudentsByCourse(students)
    .then(item => console.log(item))
    .catch(err => console.log(err))


/*
Expected output
Map {
	"History" => ["David"],
	"Math" => ["Alice", "David"],
	"Science" => ["Alice"]
}
*/
