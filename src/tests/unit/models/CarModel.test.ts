import { expect } from 'chai';
import mongoose from 'mongoose';
import Sinon from 'sinon';
import CarModel from '../../../models/CarModel';

describe('CarModel tests:', () => {
  describe('CarModel.readOne:', () => {
    const model = new CarModel();
    before(() => {
      Sinon.stub(model, 'readOne').resolves({
        model: 'Ferrari Maranello',
        year: 1963,
        color: 'red',
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      });
    });
    it('Must return one Car who has the same id sent in the paramenter', async () => {
      expect(await model.readOne('4edd40c86762e0fb12000003')).to.be.deep.equal({
        model: 'Ferrari Maranello',
        year: 1963,
        color: 'red',
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      });
    });
  });
});
