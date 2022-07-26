import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';

import Close from '../../assets/close.svg';
import Up from '../../assets/arrow-up.svg';
import Down from '../../assets/arrow-down.svg';

import {
    Container,
    TransactionTypeContainer,
    RadioBox
} from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction} = useTransactions();

    const [ type, setType] = useState('deposit');
    const [ title, setTitle ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const [ category, setCategory ] = useState('');

    async function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={Close} alt="close" />
            </button>

            <Container onSubmit={handleCreateTransaction}>
                <h2>
                    Register transaction
                </h2>

                <input
                    placeholder='Title'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type='number'
                    placeholder='Value'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >   
                        <img src={Up} alt="income" />
                        <span>
                            Income
                        </span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >   
                        <img src={Down} alt="outcome" />
                        <span>
                            Outcome
                        </span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Category'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Register
                </button>
            </Container>
        </Modal>
    )
}