import React, { useState } from 'react'
import { loginUser } from '../services/users'

const UserForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()

		try {
			if (password === confirmPassword) {
				loginUser({ username, password })
				console.log('submitted')
			} else {
				console.log('does not match')
			}
		} catch (error) {
			setMessage('Wrong credentials')
			setTimeout(() => {
				setMessage('')
			}, 5000)
		}
	}

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Username
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
						Password
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

				<div>
					<label>
						Confirm password
						<input
							type='password'
							name='confirmPassword'
							value={confirmPassword}
							onChange={(e) => {
								setConfirmPassword(e.target.value)
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
