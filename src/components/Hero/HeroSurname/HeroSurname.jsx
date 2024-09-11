const HeroSurname = () => {
  return (
    <h1 className="hero-title surname">
      {["c", "a", "n", "n", "i", "z", "z", "o"].map((letter, index, array) => (
        <span
          key={index}
          style={{
            animation: `heroTitleAnimation 1s ${
              (array.length - index - 1) * 0.125
            }s ease forwards`,
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default HeroSurname;
