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
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }
}

export default Router;
