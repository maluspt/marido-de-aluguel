import express, { request, response } from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/services', async (request, response) => {
    const {
        name,
        avatar,
        cpf,
        email,
        cellphone,
        address,
        bio,
        category,
        speciallity,
        ranking
    } = request.body;

    const insertedWorkersIds = await db('workers').insert({
        name,
        avatar,
        cpf,
        email,
        cellphone,
        address,
        bio,
        ranking
    });

    const worker_id = insertedWorkersIds[0];

    const insertedServicesIds = await db('services').insert({
        category,
        speciallity,
        worker_id
    });

    const service_id = insertedServicesIds[0];

    return response.send();

});

routes.post('/users', async (request, response) => {
    const {
        name,
        cpf,
        email,
        address,
        cellphone
    } = request.body;

    const insertedUserId = await db('users').insert({
        name,
        cpf,
        email,
        address,
        cellphone
    });

    return response.send();

});

routes.post('/service-budget', async (request, response) => {
    const {
        day,
        time,
        work_description,
        images,
        cost,
        name,
        cpf,
        email,
        address,
        cellphone

    } = request.body;

    const insertedUserId = await db('users').insert({
        name,
        cpf,
        email,
        address,
        cellphone
    });

    const user_id = insertedUserId[0];

    const insertedServiceBudgetId = await db('service_budget').insert({
        day,
        time,
        work_description,
        images,
        cost,
        user_id
    });

    return response.send();

})

export default routes;