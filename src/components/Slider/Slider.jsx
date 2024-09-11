import "./Slider.css";
import { ReactComponent as Csharp } from "../../assets/svg_logos/csharp.svg";
import { ReactComponent as Css } from "../../assets/svg_logos/css.svg";
import { ReactComponent as Dart } from "../../assets/svg_logos/dart.svg";
import { ReactComponent as Flutter } from "../../assets/svg_logos/flutter.svg";
import { ReactComponent as Git } from "../../assets/svg_logos/git.svg";
import { ReactComponent as Html } from "../../assets/svg_logos/html.svg";
import { ReactComponent as Java } from "../../assets/svg_logos/java.svg";
import { ReactComponent as Javascript } from "../../assets/svg_logos/javascript.svg";
import { ReactComponent as Nodejs } from "../../assets/svg_logos/nodejs.svg";
import { ReactComponent as Mongodb } from "../../assets/svg_logos/mongodb.svg";
import { ReactComponent as Mysql } from "../../assets/svg_logos/mysql.svg";
import { ReactComponent as Net } from "../../assets/svg_logos/net.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg_logos/react.svg";
import { ReactComponent as Redux } from "../../assets/svg_logos/redux.svg";

const Slider = () => {
  const svgList = [
    Git,
    Mysql,
    Mongodb,
    Html,
    Css,
    Javascript,
    ReactIcon,
    Redux,
    Nodejs,
    Dart,
    Flutter,
    Csharp,
    Net,
    Java,
  ];
  return (
    <div className="hero-slider">
      <ul className="slider-list slider-scroller">
        {svgList.map((Svg, index) => (
          <li className="slider-item" key={index}>
            <Svg />
          </li>
        ))}
      </ul>
      <ul className="slider-list slider-scroller">
        {svgList.map((Svg, index) => (
          <li className="slider-item" key={index}>
            <Svg />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
