const { render, screen, fireEvent } = require("@testing-library/react")
import { CounterApp } from '../src/CounterApp'

describe('Pruebas CounterApp', () => {

    const value = 10;

    test('Test equals to snapshot', () => {
        const { container } = render(<CounterApp value={value} />)
        expect(container).toMatchSnapshot();
    })

    test(`Valor inicial igual a ${value}`, () => {
        const { container } = render(<CounterApp value={value} />)
        expect(screen.getByText("10")).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain("10");
    })

    test(`Debe incrementar con el boton +1`, () => {
        const { container } = render(<CounterApp value={value} />)
        fireEvent.click(screen.getByRole('button', {name: 'btn-add'}))
        expect(screen.getByText('11')).toBeTruthy();
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(value);
    })
    
    test(`Debe incrementar con el boton -1`, () => {
        const { container } = render(<CounterApp value={value} />)
        fireEvent.click(screen.getByRole('button', {name: 'btn-substract'}))
        expect(screen.getByText('9')).toBeTruthy();
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(value);
    })
    
    test(`Debe funcionar el boton de reset`, () => {
        const { container } = render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByRole('button', {name: 'btn-reset'})).toBeTruthy();
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(value);
    })
})