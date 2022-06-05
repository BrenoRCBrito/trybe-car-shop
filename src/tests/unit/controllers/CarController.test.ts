import chai from 'chai';
import chaiHttp from 'chai-http';
import { afterEach } from 'mocha';
import Sinon from 'sinon';
import { ZodError } from 'zod';
import { Car } from '../../../interfaces/CarInterface';
import server, { service } from '../../../server';

chai.use(chaiHttp);

const { expect } = chai;

describe('CarController tests:', () => {
  let chaiHttpResponse;
  describe('Must return an error:', () => {
    before(async () => {
      Sinon.stub(service, 'create').resolves(null);
    });

    it('if there is no service response;', async () => {
      chaiHttpResponse = await chai
        .request(server.getApp())
        .post('/cars')
        .query({
          model: 'Fiat Uno',
          year: 1963,
          color: 'blue',
          buyValue: 3500,
          seatsQty: 4,
          doorsQty: 4,
        });
      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.be.deep.equal({
        error: 'Internal Server Error',
      });
    });
    describe('Must return an error:', () => {
      before(async () => {
        Sinon.restore();
        Sinon.stub(service, 'create').resolves({
          error: 'fdsaf',
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        } as any);
      });
      it(' if there is a service error;', async () => {
        chaiHttpResponse = await chai
          .request(server.getApp())
          .post('/cars')
          .query({
            model: 'Fiat Uno',
            year: 1963,
            color: 'blue',
            buyValue: 3500,
            seatsQty: 4,
            doorsQty: 4,
          });
        expect(chaiHttpResponse).to.have.status(400);
        console.log(chaiHttpResponse);
      });
    });
  });
});
