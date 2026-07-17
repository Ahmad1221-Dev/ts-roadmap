const students = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    grades: [88, 92, 85, 90],
    isActive: true
  },
  {
    id: 2,
    firstName: "Marcus",
    lastName: "Johnson",
    grades: [75, 82, 79, 88],
    isActive: true
  },
  {
    id: 3,
    firstName: "Priya",
    lastName: "Patel",
    grades: [95, 98, 96, 99],
    isActive: false
  },
  {
    id: 4,
    firstName: "Diego",
    lastName: "Garcia",
    grades: [82, 85, 80, 84],
    isActive: true
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Chen",
    grades: [70, 68, 74, 72],
    isActive: false
  }
];


function getFullName({firstName,lastName}){
    return firstName + ' ' + lastName;
}

console.log(getFullName(students[2]));


function calculateAverage ({grades}) {
    return grades.reduce((acc, curr) => {return acc + curr}, 0)/grades.length;
}

console.log(calculateAverage(students[1]));


function transformStudents(studs){
    return studs.map((item => {
        const avg = calculateAverage(item);
        return {
            fullName: getFullName(item),
            Average: avg.toFixed(1),
            Status: avg > 50 ? 'Pass' : 'Fail',
            isActive: item.isActive,
        }
    }
))}

console.table(transformStudents(students));