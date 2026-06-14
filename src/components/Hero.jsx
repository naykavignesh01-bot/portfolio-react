import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <img
        src={profile}
        alt="Profile"
        className="profile-img"
      />

      <h1>Hi, I'm Vignesh</h1>
      <h2>React Developer</h2>

      <p>
        I create modern and responsive websites using ReactJS.
      </p>

      <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>View Resume</button>
</a>

    </section>
  );
}

export default Hero;