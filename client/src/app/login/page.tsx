'use client';

import Button from '@/(common)/components/Button';
import Input from '@/login/components/Input';
import useHandleLogin from '@/service/useHandleLogin';

const AuthPage = () => {
	const handleLogin = useHandleLogin();
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
