import React, { useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import './styles.css';



function WorkersForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { day: 0, from: '', to: '' }

    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { day: 0, from: '', to: '' }

        ]);
    }

    return (
        <div id="page-worker-form" className="container">
            <PageHeader
                title="Consiga mais clientes usando Marido de Aluguel." />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="cpf" label="CPF" />
                    <Input name="email" label="E-mail" />
                    <Input name="cellphone" label="Celular" />
                    <Textarea name="bio" label="Fale mais sobre você" />
                </fieldset>
                <fieldset>
                    <legend>Sobre seu serviço</legend>
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
                    <Input name="speciallity" label="Especialidade" />

                </fieldset>
                <fieldset>
                    <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>
                            + novo horário </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.day} className="schedule-item">
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
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        ** Importante! <br />
                         Preencha todos os dados.
                    </p>

                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div >
    )
}

export default WorkersForm;