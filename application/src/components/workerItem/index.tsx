import React from 'react';
import './styles.css';

export interface Worker {
    name: string;
    avatar: string;
    bio: string;
    category: string;
    email: string;
    cellphone: string;
    id: number;
    cpf: string;
    speciallity: string;
}

interface WorkerItemProps {
    worker: Worker;
}

const WorkerItem: React.FC<WorkerItemProps> = ({ worker }) => {
    return (
        <article className="worker-item">
            <header>
                <img src={worker.avatar} alt="avatar" />
                <div>
                    <strong>{worker.name}</strong>
                    <span>{worker.category}</span>
                </div>
            </header>
            <p>
                {worker.bio}
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