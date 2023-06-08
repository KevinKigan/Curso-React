import { useForm } from "../hooks"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, formState, onInputChange, onResetForm } = useForm({
        description: ''

    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length < 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo && onNewTodo(newTodo);
        onResetForm()
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type='text'
                    placeholder='¿Qué hay que hacer?'
                    className='form-control'
                    name="description"
                    value={description}
                    onChange={onInputChange}
                ></input>

                <button type='submit'
                    className='btn btn-primary mt-1'>
                    Agregar
                </button>
            </form>
        </>
    )
}
