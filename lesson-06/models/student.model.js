const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    email: String,
    city: String,
});

const studentModel = mongoose.model('matric_students', studentSchema);

module.exports = studentModel;