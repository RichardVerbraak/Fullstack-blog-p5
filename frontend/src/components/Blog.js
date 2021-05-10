import React, { useState } from 'react'
import { likeBlog, getAllBlogs } from '../services/blogs'

const Blog = ({ blog, user }) => {
	const [showDetails, setShowDetails] = useState(false)

	const blogStyle = {
		padding: '10px 20px',
		border: 'solid',
		margin: '10px 0px',
	}

	return (
		<div style={blogStyle}>
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

			{showDetails && (
				<div>
					<p>{blog.url}</p>
					<p>
						{blog.likes}{' '}
						<span>
							<button
								onClick={() => {
									likeBlog(blog, user.token)
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
}

export default Blog
