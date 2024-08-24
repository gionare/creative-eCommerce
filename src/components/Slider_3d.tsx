import React from "react";
import "./Slider_3d.css"; // Import the CSS file for custom styles
import { useNavigate } from "react-router-dom";

const Slider3D: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 } as React.CSSProperties}>
          <div className="item" style={{ "--position": 1 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/3phones.png" alt="phones" onClick={() => navigate(`/product/1`)} />
          </div>
          <div className="item" style={{ "--position": 2 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/3watches.png" alt="watches" onClick={() => navigate("/product/2")} />
          </div>
          <div className="item" style={{ "--position": 3 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/drone.png" alt="drone" onClick={() => navigate("/product/4")} />
          </div>
          <div className="item" style={{ "--position": 4 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/earbuds.png" alt="earbuds" onClick={() => navigate("/product/5")} />
          </div>
          <div className="item" style={{ "--position": 5 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/mouseblk.png" alt="mouse" onClick={() => navigate("/product/10")} />
          </div>
          <div className="item" style={{ "--position": 6 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/pcblk.png" alt="pc" onClick={() => navigate("/product/12")} />
          </div>
          <div className="item" style={{ "--position": 7 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/mousefire.png" alt="mouse" onClick={() => navigate("/product/11")} />
          </div>
          <div className="item" style={{ "--position": 8 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/screen.png" alt="screen" onClick={() => navigate("/product/9")} />
          </div>
          <div className="item" style={{ "--position": 9 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/speaker.png" alt="speaker" onClick={() => navigate("/product/6")} />
          </div>
          <div className="item" style={{ "--position": 10 } as React.CSSProperties}>
            <img src="/assetsForProductPage/slider_3d/console.png" alt="console" onClick={() => navigate("/product/3")} />
          </div>
        </div>
        <div className="content">
          <h1 data-content="CREATIVE">CREATIVE</h1>
          <div className="author">
            <h2>shopping</h2>
            <p>
              <b>with</b>
            </p>
            <p>pleasure</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider3D;
