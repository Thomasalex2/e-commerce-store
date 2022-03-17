import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main>
        <div class="form-container">
            <form>
                <h4>Please Log in below</h4>
                <label for="email">Email ID <span class="required">*</span></label>
                <input type="text" id="email" name="email" placeholder="name@example.com"/>
                <label for="pwd">Password</label>
                <input type="password" id="password" name="password"/><br/>
                <div class="form-btn-container">
                    <button class="primary-btn">Login</button>
                    <button class="secondary-btn">Forgot your password?</button>
                  </div>
                  <h4>OR</h4>
                  <Link to="/sign_up" class="primary-btn">Sign Up</Link>
              </form>
        </div>
  </main>
  );
}