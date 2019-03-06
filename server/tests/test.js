import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
let should = chai.should();

/*
  * Test the /GET route
  */
 describe('/Get messages', () => {
    it('it should GET all emails/messages', (done) => {
      chai.request(server)
          .get('/messages')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});