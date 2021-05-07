import React, { useState } from 'react'
import { loginUser } from '../services/users'

const UserForm = ({ setUser }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

	const onSubmitHandler = async (e) => {
		e.preventDefault()

		if (username && password) {
			const response = await loginUser({ username, password })
			setUser(response)
		}
	}

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Username:
						<input
							type='text'
							name='username'
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
							}}
						/>
					</label>
				</div>

				<div>
					<label>
						Password:
						<input
							type='password'
							name='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
						/>
					</label>
				</div>

				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default UserForm
