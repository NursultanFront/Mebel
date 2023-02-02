import axios from 'axios';

type User = {
	name?: string;
	email: string;
	password: string;
};

// Request API.
// Add your own code here to customize or restrict how the public can register new users.
export const register = (user: User) => {
	axios
		.post('http://localhost:1337/api/auth/local/register', {
			username: user.name,
			email: user.email,
			password: user.password,
		})
		.then((response) => {
			console.log(response);
			// Handle success.
			console.log('Well done!');
			console.log('User profile', response.data.user);
			console.log('User token', response.data.jwt);
		})
		.catch((error) => {
			// Handle error.
			console.log('An error occurred:', error.response);
		});
};

export const login = (user: User) => {
	// Request API.
	axios
		.post('http://localhost:1337/api/auth/local', {
			identifier: user.email,
			password: user.password,
		})
		.then((response) => {
			// Handle success.
			console.log('Well done!');
			console.log('User profile', response.data.user);
			console.log('User token', response.data.jwt);
		})
		.catch((error) => {
			// Handle error.
			console.log('An error occurred:', error.response);
		});
};
