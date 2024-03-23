const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    due_date: {type: String ,required :true},
    create_date: {type: String },
    completed: { type: Boolean, required: true },
    user_id: {type: String , required: true}
});
const TaskModel = mongoose.model('Task',TaskSchema);
module.exports = TaskModel;