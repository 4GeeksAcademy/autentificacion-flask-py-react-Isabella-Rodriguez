import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Form from "../component/form";
import { Demo } from "./demo";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("secargihime")

	return (
		<div className="text-center mt-5">
			<h1>INICIA SESIÓN!!</h1>
			{ store.auth ? <Navigate to="/demo"/> : <Form/> }

		</div>
	);
};
