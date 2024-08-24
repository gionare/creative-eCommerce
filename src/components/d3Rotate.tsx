import React from "react";
import "./3dRotate.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="left">
        <h1>CREATIVE</h1>
        <img src="assetsForProductPage/3dRotate/2.png" alt="CSS Only" />
      </div>
      <div className="author">
        <h3>LUN DEV</h3>
        <div>
          <p>Design By</p>
          <p>Lun Dev</p>
        </div>
        <div>
          <p>Code By</p>
          <p>Lun Dev</p>
        </div>
        <img src="assetsForProductPage/3dRotate/code.png" alt="Code By Lun Dev" />
      </div>
    </header>
  );
};

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="product">
        <div className="soda" style={{ "--url": "url(assetsForProductPage/3dRotate/bg.png)" } as React.CSSProperties}></div>
        <div className="soda" style={{ "--url": "url(assetsForProductPage/3dRotate/bg2.png)" } as React.CSSProperties}></div>
      </div>

      <div className="rock">
        <img src="assetsForProductPage/3dRotate/rock1.png" alt="Rock 1" />
        <img src="assetsForProductPage/3dRotate/rock2.png" alt="Rock 2" />
        <img src="assetsForProductPage/3dRotate/rock3.png" alt="Rock 3" />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default App;
