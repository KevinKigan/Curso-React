const { render } = require("@testing-library/react")
import {FirstApp} from '../src/FirstApp'

describe('Pruebas FirstApp', () => { 
    // test('Test equals to snapshot', () => { 
    //     const title = 'Hola soy Kev'
    //     const number = 123
    //     const {container} = render(<FirstApp title={title} number = {number} />)

    //     expect(container).toMatchSnapshot();
    //  })

     test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Hola soy Kev'
        const number = 123
        const {container, getByText, getByTestId} = render(<FirstApp title={title} number = {number} />)
        expect(getByText(title)).toBeTruthy()
        expect(getByTestId('test-title')).toBeTruthy()
    
      })

     test('Debe mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola soy Kev'
        const subtitle = 'Hola soy un subtitulo'
        const number = 123
        const {container, getAllByText, getByTestId} = render(<FirstApp title={title} subtitle={subtitle} number = {number} />)
        expect(getAllByText(subtitle)).toBeTruthy()
        expect(getByTestId('test-title')).toBeTruthy()
    
      })
 })