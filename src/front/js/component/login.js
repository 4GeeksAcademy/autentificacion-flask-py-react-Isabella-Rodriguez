import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Form from "../component/form";
import { Navigate } from "react-router-dom";


export const Login = () => {
	const { store, actions } = useContext(Context);

	console.log("secargohome")

	return (
		<div className="text-center mt-5">
			<h1>INICIA SESIÓN!!</h1>
			{ store.auth ? <Navigate to="/demo"/> : <Form  text="Inicia Sesión"/> }

		</div>
	);
};