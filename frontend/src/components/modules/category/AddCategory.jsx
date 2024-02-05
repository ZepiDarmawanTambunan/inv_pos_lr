import React, { useState } from 'react'
import BreadCrumb from '../../partials/BreadCrumb'
import { Link } from 'react-router-dom'

const AddCategory = () => {
    const [input, setInput] = useState({status: 1});
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        if(e.target.name == 'name'){
            let slug = e.target.value;
            slug = slug.toLowerCase();
            slug = slug.replaceAll(' ', '-');
            setInput(prevState => ({...prevState, slug : slug}));
        }
        setInput(prevState => ({...prevState, [e.target.name] : e.target.value}));
    }

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setInput(prevState => ({prevState, photo: reader.result}));
        }
        reader.readAsDataURL(file);
    }

    const handleCategoryCreate = () => {

    }

  return (
    <>
        <BreadCrumb title={'Add Category'} />
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className='text-dark'>Add Category</h4>
                            <button className='btn btn-primary'>
                                <Link to={""} className='text-white text-decoration-none'>
                                    <i className='fa-solid fa-list'></i> List
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <label className='w-100 mt-4'>
                                    <p>Name</p>
                                    <input 
                                        type="text" 
                                        className={errors.name != undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                                        name='name'
                                        value={input.name}
                                        onChange={handleInput}
                                        placeholder='Enter Category Name'
                                    />
                                    <small className='text-danger'>
                                        {errors.name != undefined ? errors.name[0] : null}
                                    </small>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className='w-100 mt-4'>
                                    <p>Slug</p>
                                    <input 
                                        type="text" 
                                        className={errors.slug != undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                                        name='slug'
                                        value={input.slug}
                                        onChange={handleInput}
                                        placeholder='Enter Category Slug'
                                    />
                                    <small className='text-danger'>
                                        {errors.slug != undefined ? errors.slug[0] : null}
                                    </small>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className='w-100 mt-4'>
                                    <p>Serial</p>
                                    <input 
                                        type="number" 
                                        className={errors.serial != undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                                        name='serial'
                                        value={input.serial}
                                        onChange={handleInput}
                                        placeholder='Enter Category serial'
                                    />
                                    <small className='text-danger'>
                                        {errors.serial != undefined ? errors.serial[0] : null}
                                    </small>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className='w-100 mt-4'>
                                    <p>Status</p>
                                    <select
                                        className={errors.status != undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                                        name='status'
                                        value={input.status}
                                        onChange={handleInput}
                                        placeholder='Select Category status'>
                                        <option value={1}>Active</option>
                                        <option value={0}>Inactive</option>
                                    </select>
                                    <small className='text-danger'>
                                        {errors.status != undefined ? errors.status[0] : null}
                                    </small>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className='w-100 mt-4'>
                                    <p>Description</p>
                                    <textarea 
                                        className={errors.description != undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                                        name='description'
                                        value={input.description}
                                        onChange={handleInput}
                                        placeholder='Enter Category description'
                                    />
                                    <small className='text-danger'>
                                        {errors.description != undefined ? errors.description[0] : null}
                                    </small>
                                </label>
                            </div>
                            <div className="col-md-6">
                                <label className='w-100 mt-4'>
                                    <p>Photo</p>
                                    <input 
                                        type="file" 
                                        className={errors.photo != undefined ? 'form-control mt-2 is-invalid' : 'form-control mt-2'}
                                        name='photo'
                                        onChange={handlePhoto}
                                        placeholder='Enter Category photo'
                                    />
                                    <small className='text-danger'>
                                        {errors.photo != undefined ? errors.photo[0] : null}
                                    </small>
                                </label>
                                {input.photo != undefined ? 
                                    <div className="row col-6">
                                        <div className="photo-preview mt-3">
                                            <img src={input.photo} alt="photo preview" className='img-thumbnail' />
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="col-md-12">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="d-grid mt-4">
                                        <button className='btn btn-primary mt-4' onClick={handleCategoryCreate}>
                                            Add
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddCategory