import Button from '../(common)/components/Button';
import Input from './components/Input';

const AuthPage = () => {
	const handleLogin = async (formData: FormData) => {
		'use server';

		const authInfo = {
			email: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(authInfo);
	};
	return (
		<form action={handleLogin}>
			<div className="my-8">
				<Input label="아이디" name="email" />
				<Input label="비밀번호" name="password" />
			</div>
			<Button text="login" />
		</form>
	);
};
export default AuthPage;
