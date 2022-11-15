import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './App.css';

const App = () => {

  const [image, setImage] = useState();

  const fetchCatData = useCallback(async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search")
      setImage(response.data[0])
    }
    catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchCatData()
  }, []);

  return (
    <div className="container">
      <Button
        variant="contained"
        onClick={fetchCatData}
        sx={{ margin: 2 }}
      >
        Click to get another cat
      </Button>
      <img className="image" src={image?.url} alt="cat" />
    </div>
  )
};

export default App;
