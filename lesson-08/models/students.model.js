const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    firstName:String,
    lastName: String,
    fatherName: String,
    email: String,
});

const studentmodel = mongoose.model('students', StudentSchema);
module.exports = studentmodel;
