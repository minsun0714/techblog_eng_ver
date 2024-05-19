const useHandleLogin = () => {
	const handleLogin = async (formData: FormData) => {
		'use server';

		const authInfo = {
			username: formData.get('username'),
			password: formData.get('password'),
		};
		const response = await fetch('http://localhost:8000/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(authInfo),
		});
		const data = await response.json();
		console.log('📢[page.tsx:21]: data: ', data);
	};
	return handleLogin;
};
export default useHandleLogin;
