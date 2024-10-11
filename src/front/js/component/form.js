import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Form = (props) => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        console.log("send data");
        console.log(email, password);

        // Aquí puedes agregar la validación antes de hacer el login o signup
        if (!email || !password) {
            console.log("Por favor, completa todos los campos.");
            return; // Salir de la función si hay campos vacíos
        }

        // Mover la acción de login dentro de sendData para que solo se ejecute al enviar el formulario
        if (props.text === "Crear Usuario") {
            actions.signup(email, password);
        } else {
            actions.login(email, password);
        }
    }

    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={sendData}>
                <h1>{props.text}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">{props.text}</button>
            </form>
        </div>
    );
}

export default Form;
