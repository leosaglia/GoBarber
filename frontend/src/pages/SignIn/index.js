import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import Logo from '~/assets/logo.svg';

export default function SignIn() {
	function handleSubmit(data) {
		console.tron.log(data);	
	}

	return (
		<>
			<img src={Logo} alt="GoBarber" />

			<Form onSubmit={handleSubmit}>
				<Input name="email" type="email" placeholder="Seu e-mail" />
				<Input name="password" type="password" placeholder="Sua senha secreta" />

				<button type="submit">Acessar</button>
				<Link to="/register">Criar conta gratuita</Link>
			</Form>
		</>
	);
}
