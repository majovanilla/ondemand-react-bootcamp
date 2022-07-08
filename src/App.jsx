import React from 'react';
import './App.css';
import useFeaturedBanners from './utils/hooks/useFeaturedBanners';

// Templates
import HomePage from './Templates/HomePage';

function App() {
  const { data, isLoading } = useFeaturedBanners();

  return (
    <div className="App">
      <HomePage bannerData={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
