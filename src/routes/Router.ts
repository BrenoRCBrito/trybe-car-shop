import { Router as ExpressRouter } from 'express';
import Controller from '../controllers';

class Router<T> {
  public router: ExpressRouter;

  constructor() {
    this.router = ExpressRouter();
  }

  public addRoute(controller: Controller<T>, route: string = controller.route) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    console.log(route);
    this.router.post(route, controller.create);
  }
}

export default Router;
