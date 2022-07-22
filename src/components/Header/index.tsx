import { on } from 'events';
import Logo from '../../assets/logo.svg';

import { 
    Container,
    Content
} from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="finance" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    New Transaction
                </button>

                
            </Content>
        </Container>
    )
}