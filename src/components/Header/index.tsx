import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney logo" />
                {/* Sim, eu gosto de deixar cada propriedade em uma linha. Como reparou? */}
                <button 
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}