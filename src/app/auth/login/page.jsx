"use client"

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Input } from "@nextui-org/react";

import './login.scss';
import Link from 'next/link';
import { postLogin } from '@/services/apiAuth';

function LoginPage() {
	const [username, setUsername] = useState('Admin@gmail.com');
	const [password, setPassword] = useState('123456');
	const [ShowPassword, setShowPassword] = useState(false);

	function handlChangeUsername(event) {
		const value = event.target.value;
		console.log('handlUsername: ', value);
		setUsername(value);
	}

	function handleChangPassword(event) {
		const value = event.target.value;
		console.log('handleChangPassword: ', value);
		setPassword(value);
	}


	async function handleLogin() {
		console.log('handleLogin');

		const params = {
			email: username,
			password: "123456"
	}
		const response = await postLogin(params);
		console.log('handleLogin response: ', response);
		const users = await response.json();

		if (response.ok || response.status === 200) {
			const dataUserLogin = users.data;
			console.log('handleLogin dataUserLogin', dataUserLogin, typeof dataUserLogin);
		}

	};

	return (
		<>
			<div className="login-page">
				<div className="login-page-frame-container">
					<div className="login-page-frame">
						<div className="login-page-form">

							<div className="login-page-form-title">
								{/* <span>Login to account</span> */}
							</div>

							<div className="login-inputs">
								<input value={username} type="text" name="email" placeholder='E-mail Address' onChange={handlChangeUsername} />

								<div className='login-password-field'>
									<input value={password} type={ShowPassword ? "text" : "password"} name="password" placeholder='Password' onChange={handleChangPassword} />

									{ShowPassword && ShowPassword ?
										<VisibilityIcon className='btn-custom' onClick={() => setShowPassword(!ShowPassword)} />
									:
										<VisibilityOffIcon className='btn-custom' onClick={() => setShowPassword(!ShowPassword)} />
									}
								</div>
							</div>

							<div className="login-actions">
								<button onClick={handleLogin} className='login-button'><span>Đăng nhập</span></button>
								<Link href="/auth/forget-password">Quyên mật khẩu?</Link>
							</div>

							{/* <div>
								Bạn chưa có tài khoản ? Đăng ký <Link href="/auth/register">tại đây</Link>
							</div> */}


						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage