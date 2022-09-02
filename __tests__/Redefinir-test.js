import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de redefinir', () => {
    it('Testes de  tela redefinir ', () => {
        const { getByTestId, getByText } = render(<App />);
        fireEvent.press(getByTestId("linkredefinir"))
        expect(getByTestId("camporedefinir")).toBeTruthy();
        expect(getByTestId("redefinir")).toBeTruthy();
    })
})
describe('Testes de cadastro', () => {
    it('Teste  tela cadastro', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("linkredefinir"))
        fireEvent.changeText(getByTestId("camporedefinir"), "nayonaragalvao@gmail.com");
        expect(getByTestId("redefinir")).toBeTruthy();
    })
})
