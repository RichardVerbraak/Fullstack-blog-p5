import axios from 'axios'
// const baseUrl = '/api/blogs'

const getAll = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const { data } = await axios.get('http://localhost:3003/api/blogs', config)

	return data
}

export { getAll }
