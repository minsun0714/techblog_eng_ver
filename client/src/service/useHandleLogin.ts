const useHandleLogin = () => {
	const handleLogin = async (formData: FormData) => {
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
				throw new Error();
			}
		} catch (err) {
			alert('아이디 또는 비밀번호가 일치하지 않습니다.');
		}
	};
	return handleLogin;
};
export default useHandleLogin;
