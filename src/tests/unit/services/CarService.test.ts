import { expect } from 'chai';
import mongoose from 'mongoose';
import Sinon from 'sinon';
import { Car } from '../../../interfaces/CarInterface';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';

describe('CarService tests:', () => {
  const model = new CarModel();
  const service = new CarService(model);
  describe('CarService.create:', () => {
    it('Must send an error if the parameter object dont correspond to a vehicle', async () => {
      try {
        await service.create({
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        } as Car);
      } catch (error) {
        expect(error).to.have.property('message', 'Model is required');
      }
    });
    it('Must send an error if the parameter object dont has doors or seats', async () => {
      try {
        await service.create({
          model: 'Ferrari Maranello',
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          doorsQty: 2,
        } as Car);
      } catch (error) {
        expect(error).to.have.property('message', 'Seats is required');
      }
    });
    before(() => {
      Sinon.stub(model, 'create').resolves({
        _id: '4edd40c86762e0fb12000003',
        model: 'Ferrari Maranello',
        year: 1963,
        color: 'red',
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      } as Car);
    });
    it('Must send the added car', async () => {
      expect(
        await service.create({
          model: 'Ferrari Maranello',
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        }),
      ).to.be.deep.equal({
        _id: '4edd40c86762e0fb12000003',
        model: 'Ferrari Maranello',
        year: 1963,
        color: 'red',
        buyValue: 3500000,
        seatsQty: 2,
        doorsQty: 2,
      });
    });
  });
  describe('CarService.update:', () => {
    it('Must send an error if the parameter object dont correspond to a vehicle', async () => {
      try {
        await service.update('4edd40c86762e0fb12000003', {
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          seatsQty: 2,
          doorsQty: 2,
        } as Car);
      } catch (error) {
        expect(error).to.have.property('message', 'Model is required');
      }
    });
    it('Must send an error if the parameter object dont has doors or seats', async () => {
      try {
        await service.update('4edd40c86762e0fb12000003', {
          model: 'Ferrari Maranello',
          year: 1963,
          color: 'red',
          buyValue: 3500000,
          doorsQty: 2,
        } as Car);
      } catch (error) {
        expect(error).to.have.property('message', 'Seats is required');
      }
    });
  });
});
