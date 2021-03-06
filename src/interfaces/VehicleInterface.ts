import { z } from 'zod';

export const VehicleSchema = z.object({
  model: z
    .string({
      required_error: 'Model is required',
      invalid_type_error: 'Model must be a string',
    })
    .min(3, { message: 'Model must be 3 or more characters long' }),
  year: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .gte(1900, { message: 'Year must be greater than or equal 1900' })
    .lte(2022, { message: 'Year must be lower than or equal 2022' }),
  color: z
    .string({
      required_error: 'Color is required',
      invalid_type_error: 'Color must be a string',
    })
    .min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean({ invalid_type_error: 'Status must be a bool' }).optional(),
  buyValue: z
    .number({
      required_error: 'Buy_Value is required',
      invalid_type_error: 'Buy_Value must be a number',
    })
    .int({ message: 'Buy_Value must be an integer' }),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
