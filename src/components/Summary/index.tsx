import { useContext } from 'react';

import { useTransactions } from '../../hooks/useTransactions';

import Income from '../../assets/arrow-up.svg';
import Outcome from '../../assets/arrow-down.svg';
import Total from '../../assets/dollar-sign.svg';

import {
    Container,
} from './styles';

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={Income} alt="income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={Outcome} alt="outcome" />
                </header>
                <strong>
                    - 
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p className='highlight-title'>Total</p>
                    <img src={Total} alt="total" />
                </header>
                <strong className='highlight-text'>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}