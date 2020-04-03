import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.svg';

export default function SignUp() {
	return (
		<>
			<img src={Logo} alt="GoBarber" />

			<form action="">
				<input placeholder="Nome completo" />
				<input type="email" placeholder="Seu e-mail" />
				<input type="password" placeholder="Sua senha secreta" />

				<button type="submit">Criar conta</button>
				<Link to="/">Já possuo login</Link>
			</form>
		</>
	);
}
