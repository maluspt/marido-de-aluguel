import express, { request, response, text } from 'express';
import ServiceController from './controllers/ServiceController';


const routes = express.Router();
const servicesController = new ServiceController();



routes.post('/services', servicesController.create);
routes.get('/services', servicesController.index);


export default routes;