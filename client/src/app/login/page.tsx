import Button from '../(common)/components/Button';
import Input from './components/Input';

const AuthPage = () => {
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
	return (
		<form action={handleLogin}>
			<div className="my-8">
				<Input label="아이디" name="username" />
				<Input label="비밀번호" name="password" />
			</div>
			<Button text="login" />
		</form>
	);
};
export default AuthPage;
