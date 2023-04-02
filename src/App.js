import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div>
        <form className="instagram">
          
          <h1 className="heading">Instagram</h1>
          <div>
            <input type="text" className="mobile" placeholder="Mobile number or email address"></input>
          </div>
          <div>
            <input type="password" className="password" placeholder="Password" ></input>
          </div>  
          <div>
          <input type="button" id="facebook" className="facebook"></input>
            <label for="facebook" className="label2">Log in</label>
          </div>
          <div>
            <hr className="break1"></hr>
            <p className="or"> OR</p>
            <hr className="break2"></hr>
          </div>
          <div>
            <a className="login1">Log in with Facebook</a>
          </div>
          <div>
            <a className="forgot">Forgot password?</a>
          </div>
          <div>
            <p className="laststatement">Get the app</p>
          </div>
          
          
        
        </form>
        <div className="rectangle"> 
        <canvas className="rectangle2"></canvas>
            <label className="label3">Don't have an account?<a className="login" href="https://www.instagram.com/accounts/login/?source=auth_switcher"> Sign up</a></label>
          </div>
          
          <div>
            <a  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DE8BC6893-D781-4001-A70A-5C97C530FAE9%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank"><img className="google" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DE8BC6893-D781-4001-A70A-5C97C530FAE9%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank"></img></a>
          </div>
          <div>
            <a><img className="microsoft" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"></img></a>
            <div>
          <a className="meta" href="https://about.meta.com/">Meta</a>
          <a className="about" href="https://about.instagram.com/">About</a>
          <a className="blog" href="https://about.instagram.com/blog">Blog</a>
          <a className="jobs" href="https://about.instagram.com/about-us/careers">Jobs</a>
          <a className="help" href="https://help.instagram.com/">Help</a>
          <a className="api" href="https://developers.facebook.com/docs/instagram">API</a>
          <a className="privacy" href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</a>
          <a className="terms" href="https://help.instagram.com/581066165581870/">Terms</a>
          <a className="topAccounts" href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
          <a className="locations" href="https://www.instagram.com/explore/locations/">Locations</a>
          <a className="instagramLite" href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a className="contactUploading" href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploadling & Non-Users</a>
          <a className="metaVerified" href="https://about.meta.com/technologies/meta-verified/">Meta Verified</a>
        </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
