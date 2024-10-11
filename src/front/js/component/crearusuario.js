import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "./form";
import { Navigate } from "react-router-dom";

const Crearusuario = () => {

    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


   return(<>
        { store.auth ? <Navigate to="/demo"/> : <Form text="Crear Usuario"/> }
        
   
   </>)
}

export default Crearusuario;