// const PORT_BE = process.env.PORT_BE;
const PORT_BE = 3001;
const VERSTION = process.env.VERSTION;

export const getLogin = async (query = {}) => {
	try {
		// const response = await fetch(`${PORT_BE}/api/${VERSTION}/users`, { query });
		const response = await fetch(`http://localhost:${PORT_BE}/auth/login`);

		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get data been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

export const postLogin = async (data) => {
	try {
		const response = await fetch(`http://localhost:${PORT_BE}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data),
		});

		if (response.ok || response.status === 200) {
			// console.log('Ở file service response về data: ', response)
			return response;
    } else {
			throw new Error(`Get data been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
}