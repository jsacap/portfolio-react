import React, { useState, useEffect } from 'react'


const SandBox = () => {
    const [formData, setFormData] = useState({
        title: '',
        context: '',
        tags: []
    })

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const [collectTags, setCollectTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        const { tags } = formData
        setCollectTags(tags)
    }
    
  return (
    <div className='jsa__articlepage text-white'>
        <form onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label className='col-md-12'>Title</label>
                <input className='mb-5' 
                type='text' 
                value={formData.title} 
                name='title' 
                onChange={handleChange} 
                />

                <label className='col-md-12'>Context</label>
                <textarea className='col-md-12 mb-5' 
                value={formData.context} 
                name='context'
                onChange={handleChange} 
                />

                <label className='col-md-12'>Tags</label>
                <input type='text' 
                value={formData.tags} 
                name='tags'
                onChange={handleChange}
                />

            </div>
            
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>

        {collectTags && (
            <div>
                <p>{ collectTags }</p>
                </div>
        )} 
    </div>
  )
}

export default SandBox