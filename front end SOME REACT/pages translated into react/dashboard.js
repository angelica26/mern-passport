var Dashboard = React.createClass({
  render: function() {
    return (

      <div id="wrapper">
        <div id="logo">
          <h1>Feels</h1>
        </div>
      
        <h3>Welcome</h3>
        <div id="dashboard">
          <div id="start">
            <h5>Start Emotion Predictor</h5>
            <img src="images/start.png" alt="heart eye emoji" width={316} height={320} id="startpic" />
            <br />
            <button className="dash-button" id="start-button">Start!</button>
          </div>
          <div id="preferences">
            <h5>Your Preferences</h5>
            <h5>Food Preferences</h5>
            <p>Foods you'd like to <b>EXCLUDE</b> from your search results (feel free to edit)</p>
            <form name="updatePrefs">
              <input name="american" id="american" type="checkbox" defaultValue="american" /><label htmlFor="american" style={{color: 'black'}}>American</label>
              <input name="bakedgoods" id="bakedgoods" type="checkbox" defaultValue="bakedgoods" /><label htmlFor="bakedgoods" style={{color: 'black'}}>Baked Goods</label>
              <input name="bbq" id="bbq" type="checkbox" defaultValue="bbq" /><label htmlFor="bbq" style={{color: 'black'}}>BBQ</label>
              <input name="caribbean" id="caribbean" type="checkbox" defaultValue="caribbean" /><label htmlFor="caribbean" style={{color: 'black'}}>Caribbean</label>
              <input name="chinese" id="chinese" type="checkbox" defaultValue="chinese" /><label htmlFor="chinese" style={{color: 'black'}}>Chinese</label>
              <input name="comfort" id="comfort" type="checkbox" defaultValue="comfort" /><label htmlFor="comfort" style={{color: 'black'}}>Comfort</label>
              <input name="fastfood" id="fastfood" type="checkbox" defaultValue="fastfood" /><label htmlFor="fastfood" style={{color: 'black'}}>Fast Food</label>
              <input name="french" id="french" type="checkbox" defaultValue="french" /><label htmlFor="french" style={{color: 'black'}}>French</label>
              <input name="german" id="german" type="checkbox" defaultValue="german" /><label htmlFor="german" style={{color: 'black'}}>German</label>
              <input name="icecream" id="icecream" type="checkbox" defaultValue="icecream" /><label htmlFor="icecream" style={{color: 'black'}}>Ice Cream</label>
              <input name="indian" id="indian" type="checkbox" defaultValue="indian" /><label htmlFor="indian" style={{color: 'black'}}>Indian</label>
              <input name="italian" id="italian" type="checkbox" defaultValue="italian" /><label htmlFor="italian" style={{color: 'black'}}>Italian</label>
              <input name="japanese" id="japanese" type="checkbox" defaultValue="japanese" /><label htmlFor="japanese" style={{color: 'black'}}>Japanese</label>
              <input name="latin" id="latin" type="checkbox" defaultValue="latin" /><label htmlFor="latin" style={{color: 'black'}}>Latin</label>
              <input name="mediterranean" id="mediterranean" type="checkbox" defaultValue="mediterranean" /><label htmlFor="mediterranean" style={{color: 'black'}}>Mediterranean</label>
              <input name="mexican" id="mexican" type="checkbox" defaultValue="mexican" /><label htmlFor="mexican" style={{color: 'black'}}>Mexican</label>
              <input name="pizza" id="pizza" type="checkbox" defaultValue="pizza" /><label htmlFor="pizza" style={{color: 'black'}}>Pizza</label>
              <input name="sandwiches" id="sandwiches" type="checkbox" defaultValue="sandwiches" /><label htmlFor="sandwiches" style={{color: 'black'}}>Sandwiches</label>
              <input name="steak" id="steak" type="checkbox" defaultValue="steak" /><label htmlFor="steak" style={{color: 'black'}}>Steak</label>
              <input name="surfturf" id="surfturf" type="checkbox" defaultValue="surfturf" /><label htmlFor="surfturf" style={{color: 'black'}}>Surf n Turf</label>
              <input name="tapas" id="tapas" type="checkbox" defaultValue="tapas" /><label htmlFor="tapas" style={{color: 'black'}}>Tapas</label>
              <input name="thai" id="thai" type="checkbox" defaultValue="thai" /><label htmlFor="thai" style={{color: 'black'}}>Thai</label>
              <h5>Movie Preferences</h5>
              <p>Movie genres you'd like to <b>EXCLUDE</b> from your search results (feel free to edit)</p>
              <input name="action" id="action" type="checkbox" defaultValue="action" /><label htmlFor="action" style={{color: 'black'}}>Action</label>
              <input name="adventure" id="adventure" type="checkbox" defaultValue="adventure" /><label htmlFor="adventure" style={{color: 'black'}}>Adventure</label>
              <input name="animation" id="animation" type="checkbox" defaultValue="animation" /><label htmlFor="animation" style={{color: 'black'}}>Animation</label>
              <input name="comedy" id="comedy" type="checkbox" defaultValue="comedy" /><label htmlFor="comedy" style={{color: 'black'}}>Comedy</label>
              <input name="crime" id="crime" type="checkbox" defaultValue="crime" /><label htmlFor="crime" style={{color: 'black'}}>Crime</label>
              <input name="documentary" id="documentary" type="checkbox" defaultValue="documentary" /><label htmlFor="documentary" style={{color: 'black'}}>Documentary</label>
              <input name="drama" id="drama" type="checkbox" defaultValue="drama" /><label htmlFor="drama" style={{color: 'black'}}>Drama</label>
              <input name="family" id="family" type="checkbox" defaultValue="family" /><label htmlFor="family" style={{color: 'black'}}>Family</label>
              <input name="fantasy" id="fantasy" type="checkbox" defaultValue="fantasy" /><label htmlFor="fantasy" style={{color: 'black'}}>Fantasy</label>
              <input name="history" id="history" type="checkbox" defaultValue="history" /><label htmlFor="history" style={{color: 'black'}}>History</label>
              <input name="horror" id="horror" type="checkbox" defaultValue="horror" /><label htmlFor="horror" style={{color: 'black'}}>Horror</label>
              <input name="musical" id="musical" type="checkbox" defaultValue="musical" /><label htmlFor="musical" style={{color: 'black'}}>Musical</label>
              <input name="mystery" id="mystery" type="checkbox" defaultValue="mystery" /><label htmlFor="mystery" style={{color: 'black'}}>Mystery</label>
              <input name="romance" id="romance" type="checkbox" defaultValue="romance" /><label htmlFor="romance" style={{color: 'black'}}>Romance</label>
              <input name="scifi" id="scifi" type="checkbox" defaultValue="scifi" /><label htmlFor="scifi" style={{color: 'black'}}>Sci-Fi</label>
              <input name="thriller" id="thriller" type="checkbox" defaultValue="thriller" /><label htmlFor="thriller" style={{color: 'black'}}>Thriller</label>
              <input name="war" id="war" type="checkbox" defaultValue="war" /><label htmlFor="war" style={{color: 'black'}}>War</label>
              <input name="western" id="western" type="checkbox" defaultValue="western" /><label htmlFor="western" style={{color: 'black'}}>Western</label>
              <br />
              <button type="submit" id="update" className="dash-button">Save Updated Preferences</button>
            </form>
          </div>
          <div id="mood-tracker">
            <h5>Mood Tracker</h5>
          </div>
        </div>
      </div>
    );
  }
});