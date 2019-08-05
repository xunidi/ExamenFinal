/*eslint no-restricted-globals: ["off", "location"]*/
import axios from 'axios';
import $ from 'jquery';

export default {
	post: (path, data = {}, headers, cancelToken) => axios.post(path, data, { headers, cancelToken }).then(({ data }) => data).catch(checkError),
	patch: (path, data = {}, headers, cancelToken) => axios.patch(path, data, { headers, cancelToken }).then(({ data }) => data).catch(checkError),
	put: (path, data = {}, headers) => axios.put(path, data, { headers }).then(({ data }) => data).catch(checkError),
	get: (path, params = {}, headers) => axios.get(path, { params, headers }).then(({ data }) => data).catch(checkError),
	delete: (path, params = {}, headers) => axios.delete(path, { params, headers }).then(({ data }) => data).catch(checkError)
};

export const adminPost = (path, data, cancelToken) => {
	return axios
		.post(
			path,
			$.param({
				data: JSON.stringify({
					...data,
					timestamp: Math.floor(Date.now())
				})
			}),
			{ cancelToken }
		)
		.then(({ data }) => {
			if (!data.response_code || Number(data.response_code) === 200) return data;
			else {
				let errorMessage = data.response_message;
				if (typeof errorMessage === 'object') errorMessage = errorMessage[Object.keys(errorMessage)[0]];

				throw new Error(errorMessage || 'Ocurrio un error');
			}
		})
		.catch(async (e) => {
			if (e.response && e.response.status === 401) {
			}
			throw e;
		});
};
export const elbPost = (path, data = {}, headers, cancelToken) => {
	data.public_key = 'e7d7c9d5fe292478eefc34fb3de7e5cd6c41a0d2';
	if (undefined === data.teamID) data.teamID = 6;
	return axios
		.post(
			path,
			$.param({
				data: JSON.stringify({
					...data,
					timestamp: Math.floor(Date.now())
				})
			}),
			{ cancelToken }
		)
		.then(({ data }) => {
			if (!data.response_code || Number(data.response_code) === 200) return data;
			else {
				let errorMessage = data.response_message;
				if (typeof errorMessage === 'object') errorMessage = errorMessage[Object.keys(errorMessage)[0]];

				throw new Error(errorMessage || 'Ocurrio un error');
			}
		})
		.catch(async (e) => {
			if (e.response && e.response.status === 401) {
			}
			throw e;
		});
};
const checkError = (e) => {
	if (e.response && e.response.data && e.response.data.error) {
		const error = new Error(e.response.data.error);
		error.code = e.response.data.errorCode ? e.response.data.errorCode : e.response.data.errorCode || 'Error';
		throw error;
	} else if (!e.code) {
		throw new Error('No se pudo accesar a la plataforma intenta de nuevo');
	} else throw e;
};
