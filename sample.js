// const emp=[
//     {id:1,name:"John",age:30,salary:50000,city:"New York"},
//     {id:2,name:"Jane",age:25,salary:60000,city:"Los Angeles"},
//     {id:3,name:"Mike",age:35,salary:70000,city:"Chicago"}];

// const output= emp.filter(f=>f.salary>55000).map((m) =>m.name).join(", ").concat(" are earning more than 55000");
// const result = emp.push({id:4,name:"Avi",age:20,salary:50000,city:"chennai"});
// const emp1=emp.every((e)=>e.salary>55000);
// console.log(emp1);

// const emp2=emp.slice(0,2);
// console.log(emp2);

// emp.splice(1,2);
// console.log(emp);

// console.log(output);
// console.log(result);
// console.log(emp);

// const emp5= emp.find((e)=>e.name==="Mike");
// console.log(emp5);

// const emp6= emp.pop();
// console.log(emp6);


// dot(student.name)
// bracket(student["dept"])
// update(student.marks=90)
// add(student.city)
// delete(delete student.age)
// in("attendance" in student)
// method(student.getDetails())

// let foods = {
//     name: "Pizza",
//     price: 10,
//     ingredients: ["cheese", "tomato sauce", "pepperoni"],
//     address:{
//         city:"chennai"
//     }
// }

// console.log(foods["address"]["city"]);
// console.log(foods.name);
// let update=foods.price=15;
// console.log(foods);

// delete foods.ingredients[1];
// console.log(foods);

// const marks={
//     maths:90,
//     physics:80,     
//     chemistry:85
// };

// console.log(Object.keys(marks));
// console.log(Object.values(marks));
// console.log(Object.entries(marks));
//  for (const[key, value] of Object.entries(marks)) {
//     console.log(`${key}: ${value}`);
//  }

// const user={
//     name:"John",
//     age:30,};

//     console.log(Object.assign({},user,{age:35}));
//     user.age=40;
//     console.log(Object.freeze(user));
    //fromEntries (Object.fromEntries([["name","John"],["age",30]])
    //stringify(JSON.stringify(user))
    //parse(JSON.parse('{"x:1"}'))


    // ternary
    // marks>=50?"pass":"fail"

    // Short-circuit AND
    // isLoogedIn && "Welcome back!"

    // optional chaining
    // user.address?.city

    // nullish coalescing
    // city??"Unknown"      watch out: 0??5 gives 0, not 5
  
    // async function fetchData() {
    //     try {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const users = await res.json();
    //         console.log(users[0].name);
    //     } catch (error) {
    //         console.log("Error fetching data:", error);
    //     }
    // }

    // fetchData();


    //challenge 1:

    //  const saa=[120,60,899];
    //  console.log(saa.reduce((acc,curr)=>acc+curr,0));

    //2

    // let arr=[{
    //     name: "John",
    //     mark: 85
    // }, {
    //     name: "Jane",
    //     mark: 92            
    // },{
    //     name:"kiran",
    //     mark: 88
    // }]

    // let result= arr.find((e)=>e.name==="Kiran")??"not found";
    // console.log(result);

    //challenge 3
//     function makeGreeter(greeting) {
//     return function(name) {
//         return greeting + " " + name;
//     };
// }

// console.log(makeGreeter("Hello")("Asha"));

//challenge4:

async function fetchData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await res.json();
            let siva = users.map(user => user.name);
            console.log(siva);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }
fetchData();



