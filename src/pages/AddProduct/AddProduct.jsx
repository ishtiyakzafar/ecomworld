import React, { useEffect, useState } from 'react';
import './AddProduct.scss';
import productService from '../../services/product';

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};


const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });

  const [files, setFiles] = useState([]);
  const [base64Images, setBase64Images] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await productService.createProduct({ ...productDetails, images: uploadedImageUrls })
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const uploadProductImage = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    let storeImages = [];

    for (const file of selectedFiles) {

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "qjkidvfx");
      data.append("cloud_name", "dob0ubi8g");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dob0ubi8g/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      if (res.ok) {
        storeImages.push(result.secure_url);
      } else {
        console.error('Upload failed for file:', file.name, result);
      }
    };

    setUploadedImageUrls(storeImages)

  }

  const handleImageConversion = async () => {
    const base64Array = [];
    for (const file of files) {
      const base64 = await convertToBase64(file);
      base64Array.push(base64);
    }
    setBase64Images(base64Array);
  };


  useEffect(() => {
    if (files.length > 0) {
      handleImageConversion();
    }
  }, [files]);

  return (
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Product
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add new product</h1>
              <div type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></div>
            </div>
            <div class="modal-body">
              <form onSubmit={handleAddProduct} className='row g-3'>
                <div className='col-md-12'>
                  <label htmlhtmlFor="name" class="form-label">
                    Name
                  </label>
                  <input
                    required
                    value={productDetails.name}
                    onChange={handleOnChange}
                    type="text"
                    class="form-control"
                    id="name"
                    name='name'
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlhtmlFor="price" class="form-label">
                    Price
                  </label>
                  <input
                    required
                    value={productDetails.price}
                    onChange={handleOnChange}
                    type="number"
                    class="form-control"
                    id="price"
                    name='price'
                  />
                </div>

                <div className='col-md-6'>
                  <label htmlhtmlFor="stock" class="form-label">
                    Stock
                  </label>
                  <input
                    required
                    value={productDetails.stock}
                    onChange={handleOnChange}
                    type="number"
                    class="form-control"
                    id="stock"
                    name='stock'
                  />
                </div>

                <div className='col-md-12'>
                  <label htmlFor="category" class="form-label">Category</label>
                  <input
                    required
                    value={productDetails.category}
                    onChange={handleOnChange}
                    type="text"
                    name='category'
                    class="form-control" list="categoryOptions" id="category" placeholder="Type to search..." />
                  <datalist id="categoryOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                  </datalist>
                </div>

                <div className='col-md-12'>
                  <label htmlhtmlFor="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    required
                    value={productDetails.description}
                    onChange={handleOnChange}
                    type="text"
                    class="form-control"
                    id="description"
                    name='description'
                  />
                </div>

                <div className='col-md-12'>
                  <label for="formFile" class="form-label">Image</label>
                  <input multiple accept="image/*" onChange={uploadProductImage} required class="form-control" type="file" id="formFile" />
                </div>
                {base64Images.length > 0 &&
                  <div className='col-md-12'>
                    <div className='d-flex flex-wrap gap-3'>
                      {
                        base64Images.map((item) => (
                          <img width={60} style={{ objectFit: 'cover' }} src={item} alt="img" />
                        ))
                      }
                    </div>
                  </div>
                }
                <div class="modal-footer">
                  <button type="submit">Save changes</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div >
    </div >
  )
};

export default AddProduct;