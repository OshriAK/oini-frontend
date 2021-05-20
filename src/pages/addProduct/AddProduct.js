import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../redux/actions/productActions';

//Components
// import LoadingBox from '../../components/loadingBox/LoadingBox';
// import MessageBox from '../../components/messageBox/MessageBox';

import './AddProduct.css';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [makat, setMakat] = useState('');
  // const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [isNewComputer, setIsNewComputer] = useState('');
  const [CPUmodel, setCPUmodel] = useState('');
  const [hardDiskSize, setHardDiskSize] = useState('');
  const [computerMemorySize, setComputerMemorySize] = useState('');
  const [screen, setScreen] = useState('');
  const [operatingSystem, setOperatingSystem] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('click before dispatch');
    await dispatch(addProduct());
    console.log('click after dispatch');
  };

  return (
    <div className="addProduct-container">
      <form className="addProduct-form" onSubmit={submitHandler}>
        <div className="addProduct-title">
          <h1>הוספת מוצר</h1>
        </div>
        <>
          <div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name"> :name</label>
          </div>

          <div>
            <input
              id="brand"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <label htmlFor="brand"> :brand</label>
          </div>

          <div>
            <input
              id="model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <label htmlFor="model"> :model</label>
          </div>

          <div>
            <input
              id="makat"
              type="text"
              value={makat}
              onChange={(e) => setMakat(e.target.value)}
            />
            <label htmlFor="name"> :makat</label>
          </div>

          {/* <div>
            <input
              id="image"
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="image"> :image</label>
          </div> */}

          <div>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="category"> :category</label>
          </div>

          <div>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="price"> :price</label>
          </div>

          <div>
            <input
              id="countInStock"
              type="number"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
            <label htmlFor="countInStock"> :countInStock</label>
          </div>

          <div>
            <input
              id="isNewComputer"
              type="text"
              value={isNewComputer}
              onChange={(e) => setIsNewComputer(e.target.value)}
            />
            <label htmlFor="isNewComputer"> :isNewComputer</label>
          </div>

          <div>
            <input
              id="CPUmodel"
              type="text"
              value={CPUmodel}
              onChange={(e) => setCPUmodel(e.target.value)}
            />
            <label htmlFor="CPUmodel"> :CPUmodel</label>
          </div>

          <div>
            <input
              id="hardDiskSize"
              type="text"
              value={hardDiskSize}
              onChange={(e) => setHardDiskSize(e.target.value)}
            />
            <label htmlFor="hardDiskSize"> :hardDiskSize</label>
          </div>

          <div>
            <input
              id="computerMemorySize"
              type="text"
              value={computerMemorySize}
              onChange={(e) => setComputerMemorySize(e.target.value)}
            />
            <label htmlFor="computerMemorySize"> :computerMemorySize</label>
          </div>

          <div>
            <input
              id="screen"
              type="text"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
            />
            <label htmlFor="screen"> :screen</label>
          </div>

          <div>
            <input
              id="operatingSystem"
              type="text"
              value={operatingSystem}
              onChange={(e) => setOperatingSystem(e.target.value)}
            />
            <label htmlFor="operatingSystem"> :operatingSystem</label>
          </div>

          <button className="addProduct-button" type="submit">
            עדכן
          </button>
        </>
      </form>
    </div>
  );
};

export default AddProduct;
