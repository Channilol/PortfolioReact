import "./CustomCursor.css";

const CustomCursor = () => {
  const handleMouseMove = (e) => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorCircle = document.querySelector(".custom-cursor-circle");
    const { clientX, clientY } = e;
    const cursorWidth = 65;
    const cursorHeight = 65;
    cursor.style.transform = `translate3d(${clientX - cursorWidth / 2}px, ${clientY - cursorHeight / 2}px, 0)`;
    cursorCircle.style.transform = `translate3d(${clientX - cursorWidth / 2}px, ${clientY - cursorHeight / 2}px, 0)`;
  };

  window.addEventListener("mousemove", handleMouseMove);

  return (
    <div className="custom-cursor">
      <div className="custom-cursor-circle"></div>
    </div>
  );
};

export default CustomCursor;
