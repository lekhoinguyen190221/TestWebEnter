var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nguyen190221:shinobi123@cluster0.akpagoe.mongodb.net/test', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;