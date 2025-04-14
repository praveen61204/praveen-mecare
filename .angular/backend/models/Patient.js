const mongoose =require("mongoose")
const schema=mongoose.schema;
let Patients = new schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    age: { type: Number },
    gender: { type: String },
    email: { type: String },
  },
  {collections:"patients"}
);
module.exports=mongoose.model('Patients',Patients)