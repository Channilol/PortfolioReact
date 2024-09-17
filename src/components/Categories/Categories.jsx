import "./Categories.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";

const Categories = () => {
  return (
    <div className="categories">
      <CategoryItem title="about me" hidden={<AboutMe />} />
      <CategoryItem title="portfolio" hidden={<Portfolio />} />
      <CategoryItem title="contacts" hidden={<Contacts />} />
    </div>
  );
};

export default Categories;
