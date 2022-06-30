import BlogModel from '../models/BlogModel.js'

//methods for CRUD
//show every records
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// show unique record for id
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// created a record
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "blog created succesfully"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// update a record 
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "blog updated succesfully"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// delete a record
export const deleteBlog = async (req, res) => {
    try {
        BlogModel.destroy(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "blog deleted succesfully"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}