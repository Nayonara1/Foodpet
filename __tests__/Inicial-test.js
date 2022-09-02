import { render, fireEvent } from '@testing-library/react-native';
import App from '../App'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de  Exibição', () => {
    it('Teste de  Tela Inicial', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("campoemail")).toBeTruthy();
        expect(getByTestId("camposenha")).toBeTruthy();
        expect(getByTestId("linkcadastrar")).toBeTruthy();
        expect(getByTestId("linkredefinir")).toBeTruthy();
    })
})
describe('Testes do componente Input', () => {
    it('Teste de input email tela Inicial', () => {
        const { getByTestId } = render(<App />);
        fireEvent.changeText(getByTestId("campoemail"), "nayonaragalvao@gmail.com");
        fireEvent.changeText(getByTestId("camposenha"), "nara9090");
        expect(getByTestId("Inicial")).toBeTruthy();
    })
})