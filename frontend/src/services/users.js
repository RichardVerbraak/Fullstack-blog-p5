import axios from 'axios'

const loginUser = async (user) => {
	console.log(user)

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const { data } = await axios.post(
		'http://localhost:3003/api/users/login',
		user,
		config
	)

	console.log(data)

	localStorage.setItem('user', JSON.stringify(data))

	return data
}

export { loginUser }
