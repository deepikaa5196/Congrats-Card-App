const element = (
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="employee-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="employee-image"
      ></img>
      <h1 className="name">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram.
      </p>
      <img
        className="watch"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
