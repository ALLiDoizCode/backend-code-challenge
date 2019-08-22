var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');

// Configure chai
chai.use(chaiHttp);
chai.should();


describe("Stores", () => {
    describe("GET /", () => {
        // should get Insufficient info Error
        it("should get Insufficient info Error ", (done) => {
             chai.request('http://localhost:3000')
                 .get('/closest')
                 .end((err, res) => {
                     res.should.have.status(400);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        // should get closest store by zip in miles
        it("should get closest store by zip in miles", (done) => {
             const zip = "10003";
             chai.request('http://localhost:3000')
                 .get('/closest?zip='+zip)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.should.be.json;
                     res.body.should.have.property('address');
                     res.body.should.have.property('Store Location');
                     res.body.should.have.property('unit');
                     res.body.should.have.property('distance');
                     res.body.address.should.equal('255 Greenwich St');
                     res.body['Store Location'].should.equal('Greenwich & Murray');
                     res.body.unit.should.equal('mi');
                     res.body.distance.should.equal('1.7');
                     done();
                  });
         });
         
        // should get closest store by address in miles
        it("should get closest store by address in miles", (done) => {
             const address = "77 E 4th St, New York, NY 10003";
             chai.request('http://localhost:3000')
                 .get('/closest?address='+address)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.should.be.json;
                     res.body.should.have.property('address');
                     res.body.should.have.property('Store Location');
                     res.body.should.have.property('unit');
                     res.body.should.have.property('distance');
                     res.body.address.should.equal('255 Greenwich St');
                     res.body['Store Location'].should.equal('Greenwich & Murray');
                     res.body.unit.should.equal('mi');
                     res.body.distance.should.equal('1.4');
                     done();
                  });
         });

         // should get closest store by address in km
        it("should get closest store by address in km", (done) => {
            const address = "77 E 4th St, New York, NY 10003";
            chai.request('http://localhost:3000')
                .get('/closest?unit=km&address='+address)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property('address');
                    res.body.should.have.property('Store Location');
                    res.body.should.have.property('unit');
                    res.body.should.have.property('distance');
                    res.body.address.should.equal('255 Greenwich St');
                    res.body['Store Location'].should.equal('Greenwich & Murray');
                    res.body.unit.should.equal('km');
                    res.body.distance.should.equal('2.2');
                    done();
                 });
        });

        // should get closest store by zip in km
        it("should get closest store by zip in km", (done) => {
            const zip = "10003";
            chai.request('http://localhost:3000')
                .get('/closest?unit=km&zip='+zip)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property('address');
                    res.body.should.have.property('Store Location');
                    res.body.should.have.property('unit');
                    res.body.should.have.property('distance');
                    res.body.address.should.equal('255 Greenwich St');
                    res.body['Store Location'].should.equal('Greenwich & Murray');
                    res.body.unit.should.equal('km');
                    res.body.distance.should.equal('2.7');
                    done();
                 });
        });
    });
});