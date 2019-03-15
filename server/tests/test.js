import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

/*
  * Test the /GET route
  */

 describe('/Get All messages', () => {
    it('it should GET all emails/messages', (done) => {
      chai.request(server)
          .get('/api/v1/messages')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
});

describe('/Get Unread messages', () => {
  it('it should GET all Unread messages', (done) => {
    chai.request(server)
        .get('/api/v1/messages/unread')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
          done();
        });
  });
});

describe('/Get Sent messages', () => {
  it('it should GET all sent messages', (done) => {
    chai.request(server)
        .get('/api/v1/messages/sent')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
          done();
        });
  });
});

describe('/Get a specific message', () => {
  it('it should get a specific message', (done) => {
    chai.request(server)
        .get('/api/v1/messages/d1081ada-49d5-4a0a-b97e-e10b85ba68eb')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
          done();
        });
  });
});


describe('/Post message', () => {
  it('it should Created messages', (done) => {
    chai.request(server)
        .post('/api/v1/messages')
        .send({subject:'bbnvfjnvnjd', message:'bvfbv fnv jf', parentMessageId:445455, status:'Sent'})
        .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
          done();
        });
  });
});

describe('/Delete message', () => {
  it('it should Delete messages', (done) => {
    chai.request(server)
        .delete('/api/v1/messages/f3de91e9-bc4b-48fb-9670-67f38dce8eec')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
          done();
        });
  });
});

//SignUp and Signin Test

describe('/Get All Users', () => {
  it('it should GET all users', (done) => {
    chai.request(server)
        .get('/api/v1/users')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
          done();
        });
  });
});

describe('/SignUp', () => {
  it('it should Created User', (done) => {
    chai.request(server)
        .post('/api/v1/signup')
        .send({email:'emmykalisa8@gmail.com', firstName:'Emmanuel', lastName:'KALISA', password:'kalisa'})
        .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
          done();
        });
  });
});

