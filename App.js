import React from "react";
import ReactDOM from "react-dom";
import Flowers from "./Components/Flowers";
import Image3 from "./Components/images/image3.jpg";
import Image2 from "./Components/images/image2.jpg";
import Image1 from "./Components/images/image1.jpg";
import Image4 from "./Components/images/image4.jpg";
import Image5 from "./Components/images/image5.jpg";
import FlowersData from "./Components/FlowersData";
import "./index.css";

const FlowerInfo = (values) => {
  return (
    <>
      <Flowers
        title={values.title}
        imgsrc={values.imgsrc}
        desc={values.desc}
        btn={values.btn}
      />
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>About Flowers</h1>
      <div className="container">
        <Flowers
          title={FlowersData[0].title}
          imgsrc={FlowersData[0].imgsrc}
          desc={FlowersData[0].desc}
          btn={FlowersData[0].btn}
        />
        <Flowers
          title={FlowersData[1].title}
          imgsrc={FlowersData[1].imgsrc}
          desc={FlowersData[1].desc}
          btn={FlowersData[1].btn}
        />
        <Flowers
          title={FlowersData[2].title}
          imgsrc={FlowersData[2].imgsrc}
          desc={FlowersData[2].desc}
          btn={FlowersData[2].btn}
        />
        <Flowers
          title={FlowersData[3].title}
          imgsrc={FlowersData[3].imgsrc}
          desc={FlowersData[3].desc}
          btn={FlowersData[3].btn}
        />

        {FlowersData.map((values) => {
          return (
            <>
              <Flowers
                title={values.title}
                imgsrc={values.imgsrc}
                desc={values.desc}
                btn={values.btn}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
