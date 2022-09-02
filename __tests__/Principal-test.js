import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App'
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização ', () => {
    it('Teste  de tela principal',async () => {
        const { getByTestId } = await render(<App />);
        fireEvent.changeText(getByTestId("campoemail"), "nayonaragalvao@gmail.com");
        fireEvent.changeText(getByTestId("camposenha"), "nara9090");
        await waitFor(() =>  fireEvent.press(getByTestId("Inicial")))
        
        
    })
})