var CreateAccount = React.createClass({
  render: function() {
    return (

      <div id="wrapper">
        <div id="logo">
          <h1>Feels</h1>
        </div>
      
        <h3>Create an Account</h3>
        <div id="account-form-div">
          <form id="create-account">
            <input placeholder="First Name" type="text" label="First Name" name="firstName" classname="account" />
            <input placeholder="Last Name" type="text" label="Last Name" name="lastName" />
            <input placeholder="Password" type="password" label="Password" name="password" />
            <input placeholder="Re-enter Password" type="password" label="Re-enter Password" name="reEnterPassword" />
            <input placeholder="Email" type="email" label="Email" name="email" />
            <input placeholder="Primary location (zipcode)" type="text" label="Email" name="primaryZipcode" />
            <h4>Food Preferences</h4>
            <p>Select any foods you'd like <b>EXCLUDE</b> from your search results (this can be edited at any time)</p>
            <input name="american" id="american" type="checkbox" defaultValue="american" /><label htmlFor="american">American</label>
            <input name="bakedgoods" id="bakedgoods" type="checkbox" defaultValue="bakedgoods" /><label htmlFor="bakedgoods">Baked Goods</label>
            <input name="bbq" id="bbq" type="checkbox" defaultValue="bbq" /><label htmlFor="bbq">BBQ</label>
            <input name="caribbean" id="caribbean" type="checkbox" defaultValue="caribbean" /><label htmlFor="caribbean">Caribbean</label>
            <input name="chinese" id="chinese" type="checkbox" defaultValue="chinese" /><label htmlFor="chinese">Chinese</label>
            <input name="comfort" id="comfort" type="checkbox" defaultValue="comfort" /><label htmlFor="comfort">Comfort</label>
            <input name="fastfood" id="fastfood" type="checkbox" defaultValue="fastfood" /><label htmlFor="fastfood">Fast Food</label>
            <input name="french" id="french" type="checkbox" defaultValue="french" /><label htmlFor="french">French</label>
            <input name="german" id="german" type="checkbox" defaultValue="german" /><label htmlFor="german">German</label>
            <input name="icecream" id="icecream" type="checkbox" defaultValue="icecream" /><label htmlFor="icecream">Ice Cream</label>
            <input name="indian" id="indian" type="checkbox" defaultValue="indian" /><label htmlFor="indian">Indian</label>
            <input name="italian" id="italian" type="checkbox" defaultValue="italian" /><label htmlFor="italian">Italian</label>
            <input name="japanese" id="japanese" type="checkbox" defaultValue="japanese" /><label htmlFor="japanese">Japanese</label>
            <input name="latin" id="latin" type="checkbox" defaultValue="latin" /><label htmlFor="latin">Latin</label>
            <input name="mediterranean" id="mediterranean" type="checkbox" defaultValue="mediterranean" /><label htmlFor="mediterranean">Mediterranean</label>
            <input name="mexican" id="mexican" type="checkbox" defaultValue="mexican" /><label htmlFor="mexican">Mexican</label>
            <input name="pizza" id="pizza" type="checkbox" defaultValue="pizza" /><label htmlFor="pizza">Pizza</label>
            <input name="sandwiches" id="sandwiches" type="checkbox" defaultValue="sandwiches" /><label htmlFor="sandwiches">Sandwiches</label>
            <input name="steak" id="steak" type="checkbox" defaultValue="steak" /><label htmlFor="steak">Steak</label>
            <input name="surfturf" id="surfturf" type="checkbox" defaultValue="surfturf" /><label htmlFor="surfturf">Surf n Turf</label>
            <input name="tapas" id="tapas" type="checkbox" defaultValue="tapas" /><label htmlFor="tapas">Tapas</label>
            <input name="thai" id="thai" type="checkbox" defaultValue="thai" /><label htmlFor="thai">Thai</label>
            <h4>Movie Preferences</h4>
            <p>Select which movie genres you want to <b>EXCLUDE</b> from your search results (this can be edited at any time)</p>
            <input name="action" id="action" type="checkbox" defaultValue="action" /><label htmlFor="action">Action</label>
            <input name="adventure" id="adventure" type="checkbox" defaultValue="adventure" /><label htmlFor="adventure">Adventure</label>
            <input name="animation" id="animation" type="checkbox" defaultValue="animation" /><label htmlFor="animation">Animation</label>
            <input name="comedy" id="comedy" type="checkbox" defaultValue="comedy" /><label htmlFor="comedy">Comedy</label>
            <input name="crime" id="crime" type="checkbox" defaultValue="crime" /><label htmlFor="crime">Crime</label>
            <input name="documentary" id="documentary" type="checkbox" defaultValue="documentary" /><label htmlFor="documentary">Documentary</label>
            <input name="drama" id="drama" type="checkbox" defaultValue="drama" /><label htmlFor="drama">Drama</label>
            <input name="family" id="family" type="checkbox" defaultValue="family" /><label htmlFor="family">Family</label>
            <input name="fantasy" id="fantasy" type="checkbox" defaultValue="fantasy" /><label htmlFor="fantasy">Fantasy</label>
            <input name="history" id="history" type="checkbox" defaultValue="history" /><label htmlFor="history">History</label>
            <input name="horror" id="horror" type="checkbox" defaultValue="horror" /><label htmlFor="horror">Horror</label>
            <input name="musical" id="musical" type="checkbox" defaultValue="musical" /><label htmlFor="musical">Musical</label>
            <input name="mystery" id="mystery" type="checkbox" defaultValue="mystery" /><label htmlFor="mystery">Mystery</label>
            <input name="romance" id="romance" type="checkbox" defaultValue="romance" /><label htmlFor="romance">Romance</label>
            <input name="scifi" id="scifi" type="checkbox" defaultValue="scifi" /><label htmlFor="scifi">Sci-Fi</label>
            <input name="thriller" id="thriller" type="checkbox" defaultValue="thriller" /><label htmlFor="thriller">Thriller</label>
            <input name="war" id="war" type="checkbox" defaultValue="war" /><label htmlFor="war">War</label>
            <input name="western" id="western" type="checkbox" defaultValue="western" /><label htmlFor="western">Western</label>
            <br />
            <button type="submit" id="submit-new-account">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});