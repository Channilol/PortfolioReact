import "./ToTop.css";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const ToTop = () => {
  return (
    <div className="toTop">
      <i class="bi bi-chevron-double-up" onClick={scrollToTop}></i>
    </div>
  );
};

export default ToTop;
