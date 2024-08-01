// function purchasecake(callback){
//     setTimeout(()=>{
//         console.log("Cake purchased");
//     },2000);
    
// }

// function curtaindec(callback){             
//     setTimeout(()=>{                            
//         console.log("Curtain down");
//         },2000);
        
// }

// function balloons(callback){
//     setTimeout(()=>{
//         console.log("Balloons released");
//         },2000);
//         // callback()
// }

// function cakecutting(){
//     setTimeout(()=>{
//         console.log("Cake cutting");
//         },2000);
// }

// //callback hell

// // console.log("Happy Birthday:1")
// // console.log("Happy Birthday:2")
// // cakecutting()
// // console.log("Happy Birthday:3")
// // purchasecake();
// // console.log("Happy Birthday:4")
// // console.log("Happy Birthday:5")
// // curtaindec()
// // purchasecake()
// // console.log("Happy Birthday:6")
// // balloons()
// // console.log("Happy Birthday:7")
// // console.log("Happy Birthday:8")
// // cakecutting()
// // console.log("Happy Birthday:9")
// // console.log("Happy Birthday:10")

// purchasecake(()=>{
//     balloons(()=>{
//         curtaindec(()=>{
//             cakecutting();
//         })
//     })
// }) 


// //promise
// purchasecake()
// .then(()=>curtaindec())
// .then(()=>balloons())
// .then(()=>cakecutting())
// .then(()=>console.log(a))
