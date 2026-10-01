const courses = [
  { id: 1, title: "ریاضی ششم", price: 1200000, active: true },
  { id: 2, title: "تیزهوشان پنجم", price: 1800000, active: true },
  { id: 3, title: "علوم ششم", price: 900000, active: false },
];

const activeCourse = courses.filter((c)=>{
    c.active === true
})

console.log(activeCourse);