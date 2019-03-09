import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

/*
  * Test the /GET route
  */
 describe('/Get messages', () => {
    it('it should GET all emails/messages', (done) => {
      chai.request(server)
          .get('/api/v1/messages')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});