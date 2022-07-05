import React from 'react';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

// Components
import Header from './components/organisms/Header/Header';
import Slider from './components/organisms/Slider/Slider';
import Grid from './components/organisms/Grid/Grid';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Slider />
      <Grid />
    </div>
  );
}

export default App;
