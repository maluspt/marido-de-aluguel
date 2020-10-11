import React from 'react';
import PageHeader from '../../components/PageHeader';
import WorkerItem from '../../components/workerItem';

import './styles.css';


function WorkersList() {
    return (
        <div id="page-worker-list" className="container">
            <PageHeader title="Encontre o prestador de serviço ideal para você.">
                <form id="search-workers">
                    <div className="input-block">
                        <label htmlFor="category">Categorias</label>
                        <input type="text" id="category" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="day">Dia</label>
                        <input type="text" id="day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
                <WorkerItem />
            </main>
        </div >
    )
}

export default WorkersList;