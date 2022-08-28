import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main>
        <div className="form-container">
            <form>
                <h4>Please Log in below</h4>
                <label htmlFor="email">Email ID <span className="required">*</span></label>
                <input type="text" id="email" name="email" placeholder="name@example.com"/>
                <label htmlFor="pwd">Password</label>
                <input type="password" id="password" name="password"/><br/>
                <div className="form-btn-container">
                    <button className="primary-btn">Login</button>
                    <button className="secondary-btn">Forgot your password?</button>
                  </div>
                  <h4>OR</h4>
                  <Link to="/sign_up" className="primary-btn">Sign Up</Link>
              </form>
        </div>
  </main>
  );
}