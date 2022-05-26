import Service, { ServiceError } from '.';
import { Car, CarDoorsAndSeatsSchema } from '../interfaces/CarInterface';
import { VehicleSchema } from '../interfaces/VehicleInterface';
import CarModel from '../models/CarModel';

export default class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsedVehicle = VehicleSchema.safeParse(obj);
    const parsedDoorsAndSeats = CarDoorsAndSeatsSchema.safeParse(obj);
    if (!parsedVehicle.success) {
      return { error: parsedVehicle.error };
    }
    if (!parsedDoorsAndSeats.success) {
      return { error: parsedDoorsAndSeats.error };
    }
    return this.model.create(obj);
  };
}
