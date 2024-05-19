const useHandleLogin = () => {
	const handleLogin = async (formData: FormData) => {
		'use server';

		const authInfo = {
			username: formData.get('username'),
			password: formData.get('password'),
		};
		try {
			const response = await fetch('http://localhost:8000/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(authInfo),
			});
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || '비밀번호가 틀렸습니다.');
			}
			const data = await response.json();
			console.log('📢[page.tsx:21]: data: ', data.statusCode);
		} catch (err) {
			console.error(err.message);
		}
	};
	return handleLogin;
};
export default useHandleLogin;
