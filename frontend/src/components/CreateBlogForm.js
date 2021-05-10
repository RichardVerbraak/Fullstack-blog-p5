import React, { useState } from 'react'
import { addNewBlog, getAll } from '../services/blogs'

import Message from './Message'

const CreateBlogForm = ({ user, setBlogs }) => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [url, setUrl] = useState('')
	const [message, setMessage] = useState('')

	const onSubmitHandler = async (e) => {
		e.preventDefault()

		try {
			const response = await addNewBlog({ title, author, url }, user.token)

			setMessage(`A new blog ${response.title} by ${response.author} added!`)

			setTimeout(() => {
				setMessage('')
			}, 5000)

			getAll(user.token).then((data) => {
				setBlogs(data)
			})
		} catch (error) {
			const errorMessage = error.response
				? error.response.data.message
				: error.response

			setMessage(errorMessage)

			setTimeout(() => {
				setMessage('')
			}, 5000)
		}
	}

	return (
		<div>
			{message && <Message message={message} />}
			<h2>Create new</h2>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Title:
						<input
							type='text'
							name='title'
							value={title}
							onChange={(e) => {
								setTitle(e.target.value)
							}}
						/>
					</label>
				</div>

				<div>
					<label>
						Author:
						<input
							type='author'
							name='author'
							value={author}
							onChange={(e) => {
								setAuthor(e.target.value)
							}}
						/>
					</label>
				</div>

				<div>
					<label>
						URL:
						<input
							type='text'
							name='url'
							value={url}
							onChange={(e) => {
								setUrl(e.target.value)
							}}
						/>
					</label>
				</div>

				<button type='submit'>Create</button>
			</form>
		</div>
	)
}

export default CreateBlogForm
