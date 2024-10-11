import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	console.log("secargohome");

	return (
		<div className="text-center mt-5">
			<h1>Crea un usuario o inicia sesión</h1>
			<Link to="/crearusuario">
				<button type="submit" className="btn btn-primary me-2">Crear usuario</button>
			</Link>
			<Link to="/login">
				<button type="submit" className="btn btn-primary">Iniciar sesión</button>
			</Link>
		</div>
	);
};
