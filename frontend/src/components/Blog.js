import React, { useState } from 'react'

const Blog = ({ blog }) => {
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
					<p>{blog.likes}</p>
					<p>Creator</p>
				</div>
			)}
		</div>
	)
}

export default Blog
