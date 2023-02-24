var mongoose = require("../database");
const Schema = mongoose.Schema;
var userSchema = new Schema({
            name: String,
            password: String,
            email:String
});
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);