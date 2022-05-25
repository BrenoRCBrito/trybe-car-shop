import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const CarDoorsAndSeatsSchema = z.object({
  doorsQty: z
    .number({
      required_error: 'doorsQty is required',
      invalid_type_error: 'doorsQty must be a number',
    })
    .gte(2, { message: 'doorsQty must be greater than or equal 2' })
    .lte(4, { message: 'doorsQty must be lower than or equal 4' }),
  seatsQty: z
    .number({
      required_error: 'seatsQty is required',
      invalid_type_error: 'seatsQty must be a number',
    })
    .gte(2, { message: 'seatsQty must be greater than or equal 2' })
    .lte(7, { message: 'seatsQty must be lower than or equal 7' }),
});

type CarDoorsAndSeats = z.infer<typeof CarDoorsAndSeatsSchema>;

export interface Car extends CarDoorsAndSeats, Vehicle {}
