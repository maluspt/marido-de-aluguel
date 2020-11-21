import React, { useState, ReactElement, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Dropzone from '../../components/Dropzone';
import './styles.css';

function QuoteForm() {
    const [selectedFile, setSelectedFile] = useState<File>()
    return (
        <div id="page-quote-form" className="container">
            <PageHeader
                title="Preencha o formulário para solicitar um orçamento. É rapidinho." />
            <main>
                <form>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome completo" />
                        <Input name="cellphone" label="Telefone para contato" />
                        <Input name="email" label="E-mail para contato" />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre o serviço</legend>
                        <Textarea name="details" label="Descreva melhor sobre o que precisa ser feito." />
                    </fieldset>
                    <fieldset>
                        <legend>Adicione uma foto sobre os serviço (se houver)</legend>
                        <Dropzone onFileUploaded={setSelectedFile} />
                    </fieldset>
                    <footer>
                        <p>
                            ** Importante! <br />
                         Preencha todos os dados.
                    </p>

                        <button type="submit">
                            Solicitar orçamento
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default QuoteForm;