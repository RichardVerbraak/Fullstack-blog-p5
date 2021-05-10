import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import CreateBlogForm from './components/CreateBlogForm'
import UserForm from './components/UserForm'
import { getAll } from './services/blogs'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [user, setUser] = useState(null)
	const [visible, setVisible] = useState(false)

	const logout = () => {
		localStorage.removeItem('user')
		setUser(null)
		setBlogs([])
	}

	useEffect(() => {
		const userFromLocalStorage = JSON.parse(localStorage.getItem('user'))
		if (userFromLocalStorage) {
			setUser(userFromLocalStorage)
		}
	}, [])

	useEffect(() => {
		if (user) {
			getAll(user.token).then((data) => {
				setBlogs(data)
			})
		}
	}, [user])

	return (
		<div>
			{user ? (
				<div>
					<h2>Blogs</h2>
					<div>
						<p>
							{user.username} logged in{' '}
							<span>
								<button onClick={logout}>Logout</button>
							</span>
						</p>
					</div>

					{visible && <CreateBlogForm user={user} setBlogs={setBlogs} />}

					<button
						onClick={() => {
							setVisible(!visible)
						}}
					>
						{visible ? 'cancel' : 'create blog'}
					</button>

					{blogs.map((blog) => (
						<Blog key={blog.id} blog={blog} />
					))}
				</div>
			) : (
				<div>
					<h2>Login to application</h2>
					<UserForm setUser={setUser} />
				</div>
			)}
		</div>
	)
}

export default App
