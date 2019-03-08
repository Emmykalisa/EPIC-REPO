// server.js
import express from 'express';
import User from './routes/User';
import Message from './routes/Message';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})

app.use('/api/v1', User);
app.use('/api/v1', Message);
let port = process.env.PORT||3000;

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });

 export default app