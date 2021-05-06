import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import { getAll } from './services/blogs'

const App = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		getAll().then((blogs) => setBlogs(blogs))
	}, [])

	return (
		<div>
			<h2>blogs</h2>
			{blogs.map((blog) => (
				<Blog key={blog.id} blog={blog} />
			))}
		</div>
	)
}

export default App
