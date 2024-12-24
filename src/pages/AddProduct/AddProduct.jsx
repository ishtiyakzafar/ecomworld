import React, { useState } from 'react';
import './AddProduct.scss';
import productService from '../../services/product';

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    brand: "",
    title: "",
    color: "",
    quantity: "",
    price: "",
    discountPrice: "",
    discountPercent: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
    quantitySmall: "",
    quantityMedium: "",
    quantityLarge: "",
    productType: "",
    image: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });


  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await productService.createProduct({
        ...productDetails,
        images: [
          productDetails.image,
          productDetails.image2 && productDetails.image2,
          productDetails.image3 && productDetails.image3,
          productDetails.image4 && productDetails.image4,
          productDetails.image5 && productDetails.image5,
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div className='addproduct'>
      <form onSubmit={handleAddProduct} className='row g-3'>
        <div className='col-md-6'>
          <label htmlhtmlFor="brand" className="form-label">
            Brand
          </label>
          <input
            required
            value={productDetails.brand}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="brand"
            name='brand'
          />
        </div>
        <div className='col-md-6'>
          <label htmlhtmlFor="title" className="form-label">
            Title
          </label>
          <input
            required
            value={productDetails.title}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="title"
            name='title'
          />
        </div>
        <div className='col-md-4'>
          <label htmlFor="color" className="form-label">Color</label>
          <input
            required
            value={productDetails.color}
            onChange={handleOnChange}
            type="text"
            name='color'
            className="form-control" list="colorOptions" id="color" placeholder="Type to search..." />
          <datalist id="colorOptions">
            <option value="Red" />
            <option value="Green" />
            <option value="Blue" />
            <option value="White" />
            <option value="Black" />
          </datalist>
        </div>

        <div className='col-md-4'>
          <label htmlhtmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            required
            value={productDetails.quantity}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="quantity"
            name='quantity'
          />
        </div>
        <div class="col-md-4">
          <label for="productType" class="form-label">Product Type</label>
          <select name='productType' onChange={handleOnChange} value={productDetails.productType} id="productType" class="form-select">
            <option selected>Choose...</option>
            <option value="newarrival">New Arrival</option>
            <option value="bestseller">Best Seller</option>
            <option value="onsale">On Sale</option>
          </select>
        </div>

        <div className='col-md-4'>
          <label htmlhtmlFor="price" className="form-label">
            Price
          </label>
          <input
            required
            value={productDetails.price}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="price"
            name='price'
          />
        </div>
        <div className='col-md-4'>
          <label htmlhtmlFor="discountPrice" className="form-label">
            Discount Price
          </label>
          <input
            required
            value={productDetails.discountPrice}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="discountPrice"
            name='discountPrice'
          />
        </div>
        <div className='col-md-4'>
          <label htmlhtmlFor="discountPercent" className="form-label">
            Discount Percent
          </label>
          <input
            required
            value={productDetails.discountPercent}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="discountPercent"
            name='discountPercent'
          />
        </div>

        <div className='col-md-4'>
          <label htmlFor="topLevelCategory" className="form-label">Top Level Category</label>
          <input
            required
            value={productDetails.topLevelCategory}
            onChange={handleOnChange}
            type="text"
            name='topLevelCategory'
            className="form-control" list="topCategoryOptions" id="topLevelCategory" placeholder="Type to search..." />
          <datalist id="topCategoryOptions">
            <option value="Man" />
            <option value="Women" />
            <option value="Kid" />
          </datalist>
        </div>
        <div className='col-md-4'>
          <label htmlFor="secondLevelCategory" className="form-label">Second Level Category</label>
          <input
            required
            value={productDetails.secondLevelCategory}
            onChange={handleOnChange}
            type="text"
            name='secondLevelCategory'
            className="form-control" list="secondCategoryOptions" id="secondLevelCategory" placeholder="Type to search..." />
          <datalist id="secondCategoryOptions">
            <option value="Clothing" />
            <option value="Accessories" />
            <option value="Brands" />
          </datalist>
        </div>
        <div className='col-md-4'>
          <label htmlFor="thirdLevelCategory" className="form-label">Third Level Category</label>
          <input
            required
            value={productDetails.thirdLevelCategory}
            onChange={handleOnChange}
            type="text"
            name='thirdLevelCategory'
            className="form-control" list="thirdCategoryOptions" id="thirdLevelCategory" placeholder="Type to search..." />
          <datalist id="thirdCategoryOptions">
            <option value="Top" />
            <option value="Dressess" />
            <option value="T-Shirt" />
            <option value="Saree" />
            <option value="Lengha Choli" />
            <option value="Kurta" />
            <option value="Jeans" />
          </datalist>
        </div>

        <div className='col-md-12'>
          <label htmlhtmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            required
            value={productDetails.description}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="description"
            name='description'
          />
        </div>

        <div className='col-md-4'>
          <label htmlhtmlFor="quantitySmall" className="form-label">
            Quantity (Small)
          </label>
          <input
            value={productDetails.quantitySmall}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="quantitySmall"
            name='quantitySmall'
          />
        </div>
        <div className='col-md-4'>
          <label htmlhtmlFor="quantityMedium" className="form-label">
            Quantity (Medium)
          </label>
          <input
            value={productDetails.quantityMedium}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="quantityMedium"
            name='quantityMedium'
          />
        </div>
        <div className='col-md-4'>
          <label htmlhtmlFor="quantityLarge" className="form-label">
            Quantity (Large)
          </label>
          <input
            value={productDetails.quantityLarge}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="quantityLarge"
            name='quantityLarge'
          />
        </div>

        <div className='col-md-12'>
          <label htmlhtmlFor="image" className="form-label">
            Image
          </label>
          <input
            required
            value={productDetails.image}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="image"
            name='image'
          />
        </div>
        <div className='col-md-12'>
          <label htmlhtmlFor="image2" className="form-label">
            Image
          </label>
          <input
            value={productDetails.image2}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="image2"
            name='image2'
          />
        </div>
        <div className='col-md-12'>
          <label htmlhtmlFor="image3" className="form-label">
            Image
          </label>
          <input
            value={productDetails.image3}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="image3"
            name='image3'
          />
        </div>
        <div className='col-md-12'>
          <label htmlhtmlFor="image4" className="form-label">
            Image
          </label>
          <input
            value={productDetails.image4}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="image4"
            name='image4'
          />
        </div>
        <div className='col-md-12'>
          <label htmlhtmlFor="image5" className="form-label">
            Image
          </label>
          <input
            value={productDetails.image5}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="image5"
            name='image5'
          />
        </div>


        <div className="modal-footer">
          <button type="submit">Save changes</button>
        </div>
      </form>
    </div >
  )
};

export default AddProduct;