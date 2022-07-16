const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://Shibin:123lavender@cluster0.cuad3.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
const CourseSchema=new Schema({
   courseTitle:String,
   courseDescription:String,
   courseDuration:String,
   courseDate:String,
   courseVenue:String}
);
var CourseData=mongoose.model("courseset",CourseSchema);
module.exports=CourseData;