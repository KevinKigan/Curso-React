const { render, screen } = require("@testing-library/react")
import { FirstApp } from '../src/FirstApp'

describe('Pruebas FirstApp', () => {

  const title = 'Hola soy Kev';
  const subtitle = 'Hola soy un subtitulo'
  const number = 123;

  test('Test equals to snapshot', () => {
    const { container } = render(<FirstApp title={title} number={number} />)
    expect(container).toMatchSnapshot();
  })

  test('Debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} number={number} />)
    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)

  })

  test('Debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subtitle={subtitle} number={number} />)
    expect(screen.getAllByText(subtitle).length).toBe(1)
    // expect(screen.getByRole('paragraph').innerHTML).toContain(subtitle)

  })
})