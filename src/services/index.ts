// src/services/index.ts

import { ZodError } from 'zod';
import { DeleteResult } from 'mongodb';
import { Model } from '../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}
abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  delete = async (id: string): Promise<T | DeleteResult | null> =>
    this.model.delete(id);
}

export default Service;