import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate(); // Asegúrate de llamar a useNavigate()
	const location = useLocation(); // Obtiene la ubicación actual

	function handleLogout() {
		actions.logout(); // Llama a la función logout
		navigate("/"); // Redirige a la página de inicio
	}
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					{store.auth ? (
						<button onClick={handleLogout} className="btn btn-primary">Log out</button>
					) : null}
					{/* Muestra el botón "volver" solo si NO estás en las rutas / o /demo */}
					{location.pathname !== "/" && location.pathname !== "/demo" && (
						<Link to="/demo">
							<button className="btn btn-primary">volver</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};
