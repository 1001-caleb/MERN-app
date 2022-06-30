import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CreateBlogs = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }

    return (
        <>
            <h3>Create record</h3>
            <form onSubmit={store}>
                <div className='mb-3 '>
                    <label className='form-label'>Title</label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Content</label>
                    <input type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </>
    )
}

export default CreateBlogs