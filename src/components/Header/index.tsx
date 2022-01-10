import logoImg from '../../assets/logo.png';

import { Container, Content, TextLogo } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <TextLogo>
          <img src={logoImg} alt="Control Money" />
          <span className='header-title'>Control Money</span>
        </TextLogo>
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}
          >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}