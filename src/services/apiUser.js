
// utils/client.js

const BASE_URL = process.env.BASE_URL;
const VERSTION = process.env.VERSTION;

console.log('BASE_URL', BASE_URL);
console.log('VERSTION', VERSTION);

// const getListUser = (params = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await fetch(url);
// 				const response = await fetch(`${BASE_URL}/api/${VERSTION}/users`, { params });
//         const json = await response.json();
//         setData(json);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//
// 		console.log('getListUser json', data, loading, error );
//
//     fetchData();
//   }, []);
//
//   return { data, loading, error };
// };
//
// export default getListUser;


export const getListUser = async (query = {}) => {
	try {
		const response = await fetch(`${BASE_URL}/api/${VERSTION}/users`, { query });
		// const response = await fetch(`http://localhost:3000/api/v1/users`);

		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get data been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

export const getOneUser = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/api/${VERSTION}/users/${id}`);
		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get data been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

export const updateOneUser = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/api/${VERSTION}/users/${id}`);
		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get data been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

export const deleteOneUser = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/api/${VERSTION}/users/${id}`);
		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get data been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

