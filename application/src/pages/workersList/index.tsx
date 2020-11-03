import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import WorkerItem from '../../components/workerItem';
import Select from '../../components/Select';
import './styles.css';


function WorkersList() {
    return (
        <div id="page-worker-list" className="container">
            <PageHeader title="Encontre o prestador de serviço ideal para você.">
                <form id="search-workers">
                    <Select name="category"
                        label="Categoria"
                        options={[
                            { value: 'Eletricista', label: 'Eletricista' },
                            { value: 'Pintor', label: 'Pintor' },
                            { value: 'Montador de móveis', label: 'Montador de móveis' },
                            { value: 'Chaveiro', label: 'Chaveiro' },
                            { value: 'Encanador', label: 'Encanador' },
                            { value: 'Vidraceiro', label: 'Vidraceiro' },
                            { value: 'Marceneiro', label: 'Marceneiro' }
                        ]} />
                    <Select name="day"
                        label="Dia da semana"
                        options={[
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                            { value: '0', label: 'Domingo' }
                        ]} />

                    <Input type="time" name="time" label="Horário" />
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