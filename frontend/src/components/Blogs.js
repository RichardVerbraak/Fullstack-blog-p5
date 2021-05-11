import React, { useState } from 'react'
import { getAllBlogs, likeBlog } from '../services/blogs'

const Blogs = ({ blogs, user, setBlogs }) => {
	const [showDetails, setShowDetails] = useState(false)

	const blogStyle = {
		padding: '10px 20px',
		border: 'solid',
		margin: '10px 0px',
	}

	// Adds a like and then fetches blogs again
	const like = async (blog, token) => {
		await likeBlog(blog, token)
		const response = await getAllBlogs(token)
		setBlogs(response)
	}

	return blogs.map((blog) => {
		return (
			<div key={blog.id} style={blogStyle}>
				<div>
					<p>
						{blog.title} {blog.author}
						<span>
							<button
								onClick={() => {
									setShowDetails(!showDetails)
								}}
							>
								View
							</button>
						</span>
					</p>
				</div>

				{showDetails && (
					<div>
						<p>{blog.url}</p>
						<p>
							{blog.likes}{' '}
							<span>
								<button
									onClick={() => {
										like(blog, user.token)
									}}
								>
									Like
								</button>
							</span>
						</p>
						<p>Creator</p>
					</div>
				)}
			</div>
		)
	})
}

export default Blogs
