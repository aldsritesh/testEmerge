import React from "react";
import { TextInputElement } from "../../widgets/form/TextInput";
import { BuilderImage } from "../../widgets/Image";
import ErrorBoundary from "./errorNew";

const MyComponent: React.FC = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatefirst.jpg")}
          width={1200}
          height={500}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplateforth.jpg")}
          width={1200}
          height={500}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatesecond.jpg")}
          width={1200}
          height={500}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <BuilderImage
          imageSrc={require("../../../../../public/images/dentalTemplate/dentalTemplatethird.jpg")}
          width={1200}
          height={500}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
