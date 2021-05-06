import React, { useState } from 'react'
import { loginUser } from '../services/users'

const Form = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (password === confirmPassword) {
			loginUser({ username, password })
			console.log('submitted')
		} else {
			console.log('does not match')
		}
	}

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					type='text'
					name='username'
					value={username}
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				/>

				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>

				<input
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value)
					}}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Form
