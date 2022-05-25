export default interface ModelInterface<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id_: string): Promise<T | null>;
  delete(id_: string): Promise<T | null>;
}
