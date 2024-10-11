const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			auth: false




		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			logout: () => {
				console.log("logout en flux")
				localStorage.removeItem("token");
				setStore({ auth: false });
			},


			login: (email,password) => {
				console.log("login en flux")
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
					        .then(response => {
								console.log(response.status)
								if(response.status == 200){
									//pasar auth a true
									setStore({ auth: true });

								}
								return response.json()
							})
					        .then(data =>{
								localStorage.setItem("token", data.access_token);
								console.log(data)
							})
					        .catch(error => console.error("Error en la solicitud:", error));
			},

			signup: (email, password) => {
				// Validar que ambos campos no estén vacíos
				if (!email || !password) {
					console.log("Por favor, completa todos los campos.");
					return; // Salir de la función si hay campos vacíos
				}
			
				console.log("signup en flux");
				
				fetch(process.env.BACKEND_URL + "/api/signup", {
					method: 'POST',
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
						email: email,
						password: password
					}),
					redirect: "follow"
				})
				.then((response) => {
					console.log(response.status);
					if (response.status === 200) {
						setStore({ auth: true });
					}
					return response.json();
				})
				.then((data) => {
					// Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito
					console.log(data);
				})
				.catch((error) => {
					console.error("Error en la solicitud:", error);
				});
			},
			

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
