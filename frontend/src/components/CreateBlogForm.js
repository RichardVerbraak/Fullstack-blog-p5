import React, { useState } from 'react'

const CreateBlogForm = () => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [url, setUrl] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()
	}

	return (
		<div>
			<h2>Create new</h2>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Title
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
						Author
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
						URL
						<input
							type='url'
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
