import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import messages from '../models/Message';
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
                res.body.should.be.a('array');
            done();
          });
    });
});

describe('/Get Unread messages', () => {
  it('it should GET all Unread messages', (done) => {
    chai.request(server)
        .get('/api/v1/messages/unread')
        .end((err, res) => {
              res.body.should.be.a('array');
          done();
        });
  });
});

describe('/Get Sent messages', () => {
  it('it should GET all Sent messages', (done) => {
    chai.request(server)
        .get('/api/v1/messages/sent')
        .end((err, res) => {
              res.body.should.be.a('array');
          done();
        });
  });
});

