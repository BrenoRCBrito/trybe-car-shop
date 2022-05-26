import App from './app';
import CarController from './controllers/CarController';
import { Car } from './interfaces/CarInterface';
import Router from './routes/Router';

const server = new App();

const controllers = [new CarController()];

controllers.forEach((contrl) => {
  const router = new Router<Car>();
  router.addRoute(contrl);
  server.addRouter(router.router);
});

export default server;
