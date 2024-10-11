import React, { useState } from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        console.log("send data");
        console.log(email, password);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        // Realiza la solicitud fetch aquí
        fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error("Error en la solicitud:", error));
    }

    return (
        <div>
            <form className="w-50 mx-auto" onSubmit={sendData}>
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
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Form;
