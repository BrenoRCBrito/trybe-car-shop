import App from './app';
import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';
import Router from './routes/Router';
import CarService from './services/CarService';

const server = new App();

export const service = new CarService();

export const controllers = [new CarController(service)];

controllers.forEach((contrl) => {
  const router = new Router<Car>();
  router.addRoute(contrl);
  server.addRouter(router.router);
});

export default server;
