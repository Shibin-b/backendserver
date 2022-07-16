const express=require("express");
const CourseData=require('./src/model/CourseData');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
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








app.get('/getcourses',function(req,res){
    CourseData.find().then(function(courses){
        console.log(courses);
        res.send(courses);
        
    })
})




app.post('/addcourse',function(req,res){
    var item={
        courseTitle:req.body.courseTitle,
        courseDescription:req.body.courseDescription,
        courseVenue:req.body.courseVenue,
        courseDuration:req.body.courseDuration,
        courseDate:req.body.courseDate
    }
    var course=CourseData(item);
    course.save();

    CourseData.find()
    .then(function(course){
        res.send(course);
    })
})



app.put('/update/:id',function(req,res){
    const id=req.params.id;
    courseTitle=req.body.courseTitle;
        courseDescription=req.body.courseDescription;
        courseVenue=req.body.courseVenue;
        courseDuration=req.body.courseDuration;
        courseDate=req.body.courseDate;

        CourseData.findByIdAndUpdate({"_id":id},
        {$set:{"courseTitle":courseTitle,
        "courseDescription":courseDescription,
        "courseVenue":courseVenue,
        "courseDuration":courseDuration,
        "courseDate":courseDate
}}).then(function(){res.send("Updated")});
})


app.delete('/delete/:id',function(req,res){
    const id=req.params.id;
    CourseData.findByIdAndDelete(id,function()
    {res.send("Deleted")})
})




app.listen(3000);
console.log("server running at port:3000");