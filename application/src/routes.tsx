import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import WorkersForm from './pages/workersForm';
import WorkersList from './pages/workersList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/hire" component={WorkersList} />
            <Route path="/work" component={WorkersForm} />
        </BrowserRouter>
    )
}

export default Routes;