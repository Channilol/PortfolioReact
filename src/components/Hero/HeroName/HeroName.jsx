const HeroName = () => {
  return (
    <h1 className="hero-title name">
      {["f", "r", "a", "n", "c", "e", "s", "c", "o"].map((letter, index) => (
        <span
          key={index}
          style={{
            animation: `heroTitleAnimation 1s ${index * 0.1}s ease forwards`,
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};
export default HeroName;
