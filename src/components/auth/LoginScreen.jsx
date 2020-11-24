import React from 'react';
import './login.scss';
import { UseForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {
    const dispatch = useDispatch()

const [ formLoginValues, handleLoginInputchange] = UseForm ( {
    lEmail: 'example3@gmail.com',
    lPassword:'123456'
} );

    const [formRegisterValues, handleRegisterInputchange] = UseForm ( {
    rName:'jozee',
    rEmail: 'joze@gmail.com',
    rPassword1:'123456',
    rPassword2: '123456'

} );

    // lEmail= login email
    // lPassword= login password
    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch (startLogin(lEmail,lPassword))
    }
// ================================================================================

    // rEmail= register email
    // rPassword= register password
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault()

        // las contraseñas deben ser iguales
        if( rPassword1 !== rPassword2 ){
            return Swal.fire('Error','Las contraseñas deben ser iguales','error')
        }


        dispatch(startRegister (rName, rEmail, rPassword1))
    }


    
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={ rName}
                                onChange={ handleRegisterInputchange}

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputchange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rPassword1"
                                value={rPassword1}
                                onChange={handleRegisterInputchange}
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputchange}
                                autoComplete="off"

                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}