import Button from '../(common)/components/Button';

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
				<label>아이디</label>
				<input className="h-10 w-full rounded-sm border border-gray-mid-light p-3 focus:outline-gray" />
				<label>비밀번호</label>
				<input className="h-10 w-full rounded-sm border border-gray-mid-light p-3 focus:outline-gray" />
			</div>
			<Button />
		</form>
	);
};
export default AuthPage;
