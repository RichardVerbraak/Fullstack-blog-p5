import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Form from './components/Form'
import { getAll } from './services/blogs'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [user, setUser] = useState(null)

	const logout = () => {
		localStorage.removeItem('user')
		setUser(null)
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (user) {
			setUser(user)
			getAll(user.token).then((data) => {
				setBlogs(data)
			})
		}
	}, [])

	return (
		<div>
			{user ? (
				<div>
					{' '}
					<p>{user.username} logged in</p>
					<button onClick={logout}></button>
				</div>
			) : (
				<Form />
			)}

			<h2>blogs</h2>
			{blogs.map((blog) => (
				<Blog key={blog.id} blog={blog} />
			))}
		</div>
	)
}

export default App
