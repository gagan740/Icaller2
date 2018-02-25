const mongoose  =   require('mongoose');
const Schema    =   mongoose.Schema;

mongoose.Promise    =   global.Promise;
const ListSchema    =   new Schema({
    "listID": { type: Number }
});

module.exports  = mongoose.model('list', ListSchema);