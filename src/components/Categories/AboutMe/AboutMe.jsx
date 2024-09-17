import "./AboutMe.css";
import cvFile from "../../../assets/Francesco_Cannizzo_CV.pdf";

const AboutMe = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Francesco_Cannizzo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <p className="category-item-text">
        hi! my name is francesco cannizzo, and i'm a junior fullstack developer!
        <br />
        i also love graphic design, videogames and animals.
        <br />
        i'm currently working as a mobile software developer using mainly dart & flutter, so right now i'm not open to
        collaborations.
        <br />
      </p>
      <button className="about-me-btn" onClick={handleDownload}>
        download cv
      </button>
    </>
  );
};

export default AboutMe;
