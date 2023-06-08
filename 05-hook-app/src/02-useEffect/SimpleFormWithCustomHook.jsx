import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const SimpleFormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
            username: '',
            email: '',
            password: ''
        })

    // useEffect(() => {
    // //   console.log('useEffect');
    // }, [])
    
    // useEffect(() => {
    // //   console.log('useEffect Form');
    // }, [formState])
    
    // useEffect(() => {
    // //   console.log('useEffect email');
    // }, [email])

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    

    return (
        <>
            <div>SimpleFormWithCustomHook</div>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            {
             (username === 'kevin2') && <Message></Message>  
            }

            <button onClick={ onResetForm} className="btn btn-primary mt-4">Borrar</button>
        </>
    )
}
