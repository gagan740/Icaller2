const mongoose  =   require('mongoose');

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise    =   global.Promise;
mongoose.connection.on('error', (err) => {
    console.log(`Error → ${err}`);
});

const app = require('./app');

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`App running → PORT ${server.address().port}`);
});