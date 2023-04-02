import img from './images/facee.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <form className="instagram">
          
          <h1 className="heading">Instagram</h1>
          <label className="label"> Sign up to see photos and videos from your friends</label>
          <div>
          <input type="button" id="facebook" className="facebook"></input>
            <label for="facebook" className="label2">Log in with Facebook</label>
          </div>
          <div>
            <img className="icon" src={img} alt="facebook"></img>
          </div>
          <div>
            <hr className="break1"></hr>
            <p className="or"> OR</p>
            <hr className="break2"></hr>
          </div>
          
            <input type="text" id="mobile" placeholder="Mobile number or email address" required aria-label="moile phone"></input>
            <input type="text" id="fullname" placeholder="Full name" required></input>
            <input type="text" id="username" placeholder="Username" required maxlength="20"></input>
            <input type="password" id="password" placeholder="Password" required minlength="8" ></input>
          <p className="description"> People who use our service may have uploaded your contact information to Instagram. <a className="more" href="https://www.facebook.com/help/instagram/261704639352628" target="_blank">Learn more</a></p>
          <p className="decription2">By signing up, you agree to our <a className="term" href="https://help.instagram.com/581066165581870/?locale=en_GB" target="_blank">Terms, </a><a className="privacys" href="https://www.facebook.com/privacy/policy" target="_blank"> Privacy Policy</a> and <a className="cookies" href="https://help.instagram.com/1896641480634370/" target="_blank">Cookies Policy</a>.</p>
          <div>
          <input type="Submit" id="signup" className="signup" value="Sign up" ></input> 
          </div>  
          <div>
            <p className="laststatement"> Get the app.</p>
          </div>
        
        </form>
        <div className="rectangle"> 
        <canvas className="rectangle2"></canvas>
            <label className="label3">Have an account?<a className="login" href="https://www.instagram.com/accounts/login/?source=auth_switcher"> Log in</a></label>
          </div>
          <div>
            <a  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DE8BC6893-D781-4001-A70A-5C97C530FAE9%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank" rel="googleplay"><img className="google" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DE8BC6893-D781-4001-A70A-5C97C530FAE9%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank" alt="Get it on Google Play" rel="getting app on google"></img></a>
          </div>
          <div>
            <button className="microsoft"></button>
            <img className="microsoft" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Get it from Microsoft" onclick="myFunction()"></img>
            
          </div>

          <div>
          <a className="meta" href="https://about.meta.com/">Meta</a>
          <a className="about" href="https://about.instagram.com/">About</a>
          <a className="blog" href="https://about.instagram.com/blog">Blog</a>
          <a className="jobs" href="https://about.instagram.com/about-us/careers">Jobs</a>
          <a className="help" href="https://help.instagram.com/">Help</a>
          <a className="api" href="https://developers.facebook.com/docs/instagram">API</a>
          <a className="privacy" href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</a>
          <a className="terms" href="https://help.instagram.com/581066165581870/">Terms</a>
          <a className="topaccounts" href="https://www.instagram.com/directory/profiles/">Top accounts</a>
          <a className="locations" href="https://www.instagram.com/explore/locations/">Locations</a>
          <a className="instagramLite" href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a className="contactUploading" href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploadling and Non-Users</a>
          <a className="metaVerified" href="https://about.meta.com/technologies/meta-verified/">Meta Verified</a>
          </div>
        
      </div>
    </div>
  );
}
function myFunction(){
  if(window.confirm('Open Microsoft Store?'))
  {
    window.location.href='https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US';
  }
}

export default App;
 