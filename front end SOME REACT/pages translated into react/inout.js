var InOut = React.createClass({
  render: function() {
    return (

      <div id="wrapper">
        <div id="logo">
          <h1>Feels</h1>
        </div>
        
        <h3>What kind of night are you feeling?</h3>
        <div id="going-out">
          <img src="images/bluecar.png" id="blue" />
          <button id="out">Going Out!</button>
        </div>
        <div id="staying-in">
          <img src="images/browncouch.png" id="couch" />
          <button id="in">Staying In!</button>
        </div>
      </div>
    );
  }
});