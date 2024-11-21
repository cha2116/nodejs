const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');

const app = require('./app');

// console.log(app.get('env'));
console.log(process.env);
mongoose
	.connect(process.env.CONN_STR, {
		useNewUrlParser: true,
	})
	.then((conn) => {
		//console.log(conn);
		console.log('DB Connection successfull');
	})
	.catch((error) => {
		console.log('Some error has occured');
	});
