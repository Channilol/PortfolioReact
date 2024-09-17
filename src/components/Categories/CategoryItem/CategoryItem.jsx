import { useRef, useState } from "react";
import "./CategoryItem.css";

const CategoryItem = ({ title, hidden }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hiddenDivClass, setHiddenDivClass] = useState("category-hidden-div");
  //   const categoryItemRef = useRef(null);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setHiddenDivClass("category-hidden-div");
    } else {
      setHiddenDivClass("category-hidden-div expanded");
      //   if (categoryItemRef.current) {
      //     categoryItemRef.current.scrollIntoView({ behavior: "smooth" });
      //   }

      //   setTimeout(() => {
      //     window.scrollBy({
      //       top: 500,
      //       behavior: "smooth",
      //     });
      //   }, 250);
    }
  };

  return (
    <div className="category-item">
      <p className="category-title" onClick={toggleIsExpanded}>
        {title}
      </p>
      <div className={hiddenDivClass}>{hidden}</div>
    </div>
  );
};

export default CategoryItem;
