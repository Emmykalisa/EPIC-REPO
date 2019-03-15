// server.js
import express from 'express';
import User from './routes/User';
import Message from './routes/Message';
import expressValidator from 'express-validator';
import session from 'express-session';

const app = express()

app.use(express.json())
app.use(session({
  resave:true,
  saveUninitialized: true,
  secret: 'mysecret',
  name: 'session',

  cookie: {path: '/', httpOnly:true, secure: false, maxage: 3600000}
}))

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Congz, your host was done, add you API to view your data'});
})
app.use(expressValidator());

app.use('/api/v1', User);
app.use('/api/v1', Message);
app.all('*', (req, res) => {
	return res.status(404).json({ 
		status: 404,
		error: 'Invalid route' 
	});
});



let port = process.env.PORT||3000;

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });

 export default app