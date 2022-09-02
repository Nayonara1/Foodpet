import { render, fireEvent } from '@testing-library/react-native';
import App from '../App'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Exibição', () => {
    it('Teste de  Tela Cadastro', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("linkcadastrar"))
        expect(getByTestId("camponome")).toBeTruthy();
        expect(getByTestId("campoemail2")).toBeTruthy();
        expect(getByTestId("campopet")).toBeTruthy();
        expect(getByTestId("camposenha2")).toBeTruthy();
        expect(getByTestId("cadastro")).toBeTruthy();
    })
})
describe('Testes do componente Input', () => {
    it('Teste de input email tela Cadastro', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("linkcadastrar"))
        fireEvent.changeText(getByTestId("campoemail2"), "nayonaragalvao@gmail.com");
        fireEvent.changeText(getByTestId("camposenha2"), "nara9090");
        fireEvent.changeText(getByTestId("campopet"), "lu");
        fireEvent.changeText(getByTestId("camponome"), "Nayonara");
        expect(getByTestId("cadastro")).toBeTruthy();

    })
})