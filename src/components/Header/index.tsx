import logoImg from '../../assets/logo.png';
import { Container, Content, TextLogo } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <TextLogo>
          <img src={logoImg} alt="Control Money" />
          <span className='header-title'>Control Money</span>
        </TextLogo>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}