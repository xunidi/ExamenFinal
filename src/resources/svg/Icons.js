import * as React from 'react';

export const IconXMark = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
		</svg>
	);
};

export const IconAddMark = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
		</svg>
	);
};

export const IconRemoveMark = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
		</svg>
	);
};

export const IconTable = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
		</svg>
	);
};

export const IconChart = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
		</svg>
	);
};
