import React from 'react';
import './styles.css';


const WorkerItem = () => {
    return (
        <article className="worker-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/32915782?s=460&u=4b115edf3177bd27df14d2ca657787d8ed67846c&v=4" alt="avatar" />
                <div>
                    <strong>Maria Sperotto</strong>
                    <span> Eletricista </span>
                </div>
            </header>
            <p>
                Apaixonado por eletricidade.
                        <br /><br />
                        Trabalho desde 1998 fazendo concertos na área elétrica, nunca explodi nada nem ninguém. Serviço de qualidade garantido!
                    </p>

            <footer>
                <p>
                    Rank de avaliação:
                            <strong> #23</strong>
                </p>
                <button type="button">
                    Solicitar orçamento
                        </button>
            </footer>

        </article>
    );
}

export default WorkerItem;