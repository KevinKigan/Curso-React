import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'kevin',
        email: 'kevin@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({...formState, [name]: value})

    }

    useEffect(() => {
    //   console.log('useEffect');
    }, [])
    
    useEffect(() => {
    //   console.log('useEffect Form');
    }, [formState])
    
    useEffect(() => {
    //   console.log('useEffect email');
    }, [email])

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    

    return (
        <>
            <div>SimpleForm</div>
            <hr></hr>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
             (username === 'kevin2') && <Message></Message>  
            }
        </>
    )
}
