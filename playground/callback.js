// setTimeout(() => {
//     console.log('2nd set time')
// },2000)

// const names = ['Dui','Milo','Hugo']
// const showName = names.filter((name) => {
//     return  name.length <= 4
// })

// const geoCode = (address,callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     },2000)
// }

// const geo = geoCode('Thailand', (data) => {
//     console.log(data)
// })

//Mess around with the callback pattern
//1.Define an add function that accept correct arguments
//2.Use setTimeout to simulate a 2 second delay
//3.After 2 second are up, call the callback function with the sum
//4.Test your work

const add = (a, b , callback) => {
    setTimeout(() => {
        callback(a+b)
    },2000)
}

add(1,4, (sum) => {
    console.log(sum) //5
})
