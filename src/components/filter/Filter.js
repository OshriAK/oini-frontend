import React, { useEffect, useState } from 'react';

import './Filter.css';

const Filter = (props) => {
  const { products, setProducts } = props;

  const [isPriceClicked, setIsPriceClicked] = useState(false);
  const [isScreenSizeClicked, setIsScreenSizeClicked] = useState(false);
  const [isCPUclicked, setIsCPUclicked] = useState(false);
  const [isMemoryClicked, setIsMemoryClicked] = useState(false);
  const [isOsClicked, setIsOsClicked] = useState(false);

  const [priceValues, setPriceValues] = useState([]);
  const [screenSizeValues, setScreenSizeValues] = useState([]);
  const [cpuValues, setCpuValues] = useState([]);
  const [memoryValues, setMemoryValues] = useState([]);
  const [osValues, setOsValues] = useState([]);

  useEffect(() => {
    let tempArray = [];
    if (priceValues.length > 0) {
      tempArray = products.filter((prod) => {
        if (
          parseInt(prod.price) > priceValues[0] &&
          parseInt(prod.price) < priceValues[1]
        ) {
          return prod;
        } else return null;
      });
      setProducts(tempArray);
    }
  }, [products, priceValues, setProducts]);

  useEffect(() => {
    let tempArray = [];
    if (screenSizeValues.length > 0) {
      screenSizeValues.forEach((val) => {
        tempArray.push(
          ...products.filter((prod) => prod.detail.screen.includes(val))
        );
      });
      setProducts(tempArray);
    }
  }, [products, screenSizeValues, setProducts]);

  useEffect(() => {
    let tempArray = [];
    if (cpuValues.length > 0) {
      cpuValues.forEach((val) => {
        tempArray.push(
          ...products.filter((prod) => prod.detail.CPUmodel.includes(val))
        );
      });
      setProducts(tempArray);
    }
  }, [cpuValues, products, setProducts]);

  useEffect(() => {
    let tempArray = [];
    if (memoryValues.length > 0) {
      memoryValues.forEach((val) => {
        tempArray.push(
          ...products.filter((prod) => prod.detail.computerMemorySize === val)
        );
      });
      setProducts(tempArray);
    }
  }, [memoryValues, products, setProducts]);

  useEffect(() => {
    let tempArray = [];
    if (osValues.length > 0) {
      osValues.forEach((val) => {
        tempArray.push(
          ...products.filter((prod) =>
            prod.detail.operatingSystem.includes(val)
          )
        );
      });
      setProducts(tempArray);
    }
  }, [osValues, products, setProducts]);

  const handlePriceCheckBox = (value) => {
    setPriceValues([...value.split('-')]);
  };

  const handleScreenSizeCheckBox = (value) => {
    if (screenSizeValues.includes(value)) {
      setScreenSizeValues((prev) => prev.filter((val) => val !== value));
    } else {
      setScreenSizeValues((prev) => [...prev, value]);
    }
  };

  const handleCpuCheckBox = (value) => {
    if (cpuValues.includes(value)) {
      setCpuValues((prev) => prev.filter((val) => val !== value));
    } else {
      setCpuValues((prev) => [...prev, value]);
    }
  };

  const handleMemoryCheckBox = (value) => {
    if (memoryValues.includes(value)) {
      setMemoryValues((prev) => prev.filter((val) => val !== value));
    } else {
      setMemoryValues((prev) => [...prev, value]);
    }
  };

  const handleOsCheckBox = (value) => {
    if (osValues.includes(value)) {
      setOsValues((prev) => prev.filter((val) => val !== value));
    } else {
      setOsValues((prev) => [...prev, value]);
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-price">
        <h3
          className="filter-dropdown"
          onClick={() => setIsPriceClicked((prev) => !prev)}
        >
          מחיר <i className="fa fa-caret-down"></i>
        </h3>
        <form
          className={`filter-dropdown-content ${
            !isPriceClicked ? 'display-none' : ''
          }  `}
        >
          <div>
            <input
              type="radio"
              name="price"
              value="0-20000"
              onChange={(e) => handlePriceCheckBox(e.target.value)}
            />
            <label>ללא סינון</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="0-2000"
              onChange={(e) => handlePriceCheckBox(e.target.value)}
            />
            <label>0 - ₪2000</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="2000-3000"
              onChange={(e) => handlePriceCheckBox(e.target.value)}
            />
            <label>2000 - ₪3000</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="3000-4000"
              onChange={(e) => handlePriceCheckBox(e.target.value)}
            />
            <label>3000 - ₪4000</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="4000-5000"
              onChange={(e) => handlePriceCheckBox(e.target.value)}
            />
            <label>4000 - ₪5000</label>
          </div>
          <div>
            <input
              type="radio"
              name="price"
              value="5000-20000"
              onChange={(e) => handlePriceCheckBox(e.target.value)}
            />
            <label>₪מעל 5000</label>
          </div>
        </form>
      </div>

      <div className="filter-screenSize">
        <h3
          className="filter-dropdown"
          onClick={() => setIsScreenSizeClicked((prev) => !prev)}
        >
          גודל מסך <i className="fa fa-caret-down"></i>
        </h3>
        <form
          className={`filter-dropdown-content ${
            !isScreenSizeClicked ? 'display-none' : ''
          }  `}
        >
          <div>
            <input
              type="checkbox"
              name="13"
              value="13"
              onChange={(e) => handleScreenSizeCheckBox(e.target.value)}
            />
            <label>13 אינץ'</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="14"
              value="14"
              onChange={(e) => handleScreenSizeCheckBox(e.target.value)}
            />
            <label>14 אינץ'</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="15"
              value="15"
              onChange={(e) => handleScreenSizeCheckBox(e.target.value)}
            />
            <label>15 אינץ'</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="17"
              value="17"
              onChange={(e) => handleScreenSizeCheckBox(e.target.value)}
            />
            <label>17 אינץ'</label>
          </div>
        </form>
      </div>

      <div className="filter-CPU">
        <h3
          className="filter-dropdown"
          onClick={() => setIsCPUclicked((prev) => !prev)}
        >
          מעבד <i className="fa fa-caret-down"></i>
        </h3>
        <form
          className={`filter-dropdown-content ${
            !isCPUclicked ? 'display-none' : ''
          }  `}
          onSubmit={() => {}}
        >
          <div>
            <input
              type="checkbox"
              name="i3"
              value="i3"
              onChange={(e) => handleCpuCheckBox(e.target.value)}
            />
            <label>Intel Core i3</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="i5"
              value="i5"
              onChange={(e) => handleCpuCheckBox(e.target.value)}
            />
            <label>Intel Core i5</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="i7"
              value="i7"
              onChange={(e) => handleCpuCheckBox(e.target.value)}
            />
            <label>Intel Core i7</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="AMD"
              value="AMD"
              onChange={(e) => handleCpuCheckBox(e.target.value)}
            />
            <label>AMD</label>
          </div>
        </form>
      </div>

      <div className="filter-memory">
        <h3
          className="filter-dropdown"
          onClick={() => setIsMemoryClicked((prev) => !prev)}
        >
          זכרון<i className="fa fa-caret-down"></i>
        </h3>
        <form
          className={`filter-dropdown-content ${
            !isMemoryClicked ? 'display-none' : ''
          }  `}
          onSubmit={() => {}}
        >
          <div>
            <input
              type="checkbox"
              value="4"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>4GB</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="8"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>8GB</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="12"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>12GB</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="16"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>16GB</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="24"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>24GB</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="32"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>32GB</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="64"
              onChange={(e) => handleMemoryCheckBox(e.target.value)}
            />
            <label>64GB</label>
          </div>
        </form>
      </div>

      <div className="filter-os">
        <h3
          className="filter-dropdown"
          onClick={() => setIsOsClicked((prev) => !prev)}
        >
          מערכת הפעלה <i className="fa fa-caret-down"></i>
        </h3>
        <form
          className={`filter-dropdown-content ${
            !isOsClicked ? 'display-none' : ''
          }  `}
          onSubmit={() => {}}
        >
          <div>
            <input
              type="checkbox"
              value="none"
              onChange={(e) => handleOsCheckBox(e.target.value)}
            />
            <label>ללא</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Home"
              onChange={(e) => handleOsCheckBox(e.target.value)}
            />
            <label>Win 10 Home</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="Pro"
              onChange={(e) => handleOsCheckBox(e.target.value)}
            />
            <label>Win 10 Pro</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
