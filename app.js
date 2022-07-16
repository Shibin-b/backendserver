const express=require("express");
const app=express();
app.use(express.json());
// course=[
//     {
//     "courseTitle":"React",
//     "courseDescription":"React Course",
//     "courseDuration":"5 Months",
//     "courseDate":"2022-02-23",
//     "courseVenue":"Online"
//     },
//     {
//         "courseTitle":"ExpressJS",
//         "courseDescription":"ExpressJS Course",
//         "courseDuration":"5 Months",
//         "courseDate":"2021-06-01",
//         "courseVenue":"Online"
//         },
//         {
//             "courseTitle":"NodeJS",
//             "courseDescription":"NodeJS Course",
//             "courseDuration":"4 Months",
//             "courseDate":"2022-05-11",
//             "courseVenue":"Online"
//             },
//             {
//                 "courseTitle":"Angular",
//                 "courseDescription":"Angular Course",
//                 "courseDuration":"6 Months",
//                 "courseDate":"2022-02-30",
//                 "courseVenue":"Physical"
//                 }
// ]
// app.get('/getcourses',function(req,res){
//     res.send(course);
// })
// app.post('/addcourse',function(req,res){
//     console.log(req.body)
//     course.push(req.body);
//     res.status(200).send(course);
// })
app.listen(3000);