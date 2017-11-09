var HomePage = React.createClass({
  render: function() {
    return (

      <div id="wrapper">
        <div id="logo">
          <h1>Feels</h1>
        </div>
       
        <div id="intro-text">
          <h2>"I don't care, <br />whatever is fine!"</h2>
          <p>How many times have you heard that dreaded phrase when trying to pick out a movie or a place to eat? What if there were a way to simplify the process?</p>
          <p>That's what Feels is here to do. We help you find the perfect movies and eats based on how your feeling. We can even detect your emotion through a simple photo. Ready for dinner and a movie? Login or Sign Up to get started!</p>
        </div>
        <div id="panel">
          <form>
            <p className="form">Email:</p>
            <br />
            <input name="email" className="sign-in" />
            <br />
            <p className="form">Password:</p>
            <br />
            <input name="password" className="sign-in" />
            <br />
            <button type="submit">Log In</button>
          </form>	
          <a href>Create an account</a>
        </div>
      </div>
    );
  }
});