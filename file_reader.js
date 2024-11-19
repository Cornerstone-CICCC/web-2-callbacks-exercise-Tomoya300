const fs = require("fs");

function result(txt1, txt2, txt3, txt4, txt5, callbackFn) {
  callbackFn(`${txt1} ${txt2} is ${txt3} and his hobbies are ${txt4} and ${txt5}.`)
}

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  let firstName = data1 //the file content is "John"

  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    let lastName = data2 //the file content is "Smith"

    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      let age = data3 //the file content is "50"

      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        let cleanHobbies = JSON.parse(data4)  //the file content is ["swimming", "dancing"]
        let hobby1 = cleanHobbies[0]
        let hobby2 = cleanHobbies[1]
        console.log(cleanHobbies)
        result(firstName, lastName, age, hobby1, hobby2, introduce => {
          console.log(introduce)
        })
      })
    })
  })
})

// fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
//   let firstName = data1 //the file content is "John"

//   fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
//     let lastName = data2 //the file content is "Smith"
//   })

//   fs.readFile("./age.txt", "utf-8", (err, data3) => {
//       let age = data3 //the file content is "50"
//   })

//   fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
//     let cleanHobbies = JSON.parse(data4)  //the file content is ["swimming", "dancing"]
//     let hobby1 = cleanHobbies[0]
//     let hobby2 = cleanHobbies[1]
//     console.log(cleanHobbies)
//     result(firstName, lastName, age, hobby1, hobby2, introduce => {
//       console.log(introduce)
//     })
//   })
    
  
// })
