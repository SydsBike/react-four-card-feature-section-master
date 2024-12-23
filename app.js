// App Component

function App() {
  const assets = {
    supervisor: "./images/icon-supervisor.svg",
    team: "./images/icon-team-builder.svg",
    karma: "./images/icon-karma.svg",
    calculator: "./images/icon-calculator.svg",
  };
  return (
    <>
      <header className="primary-header">
        <div className="header-wrapper">
          <h1 className="title">Reliable, efficient delivery</h1>
          <p className="subtitle">Powered by Technology</p>
          <p className="blurb">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
      </header>
      <main className="main">
        <section className="supervisor card">
          <h2 className="fw-bold fs-h2">Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img src={assets.supervisor} alt="" />
        </section>
        <div className="center-group">
          <section className="team card">
            <h2 className="fw-bold fs-h2">Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={assets.team} alt="" />
          </section>
          <section className="karma card">
            <h2 className="fw-bold fs-h2">Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={assets.karma} alt="" />
          </section>
        </div>
        <section className="calculator card">
          <h2 className="fw-bold fs-h2">Calculator</h2>
          <p>Uses data from past projects to provide better delivery estimates</p>
          <img src={assets.calculator} alt="" />
        </section>
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
