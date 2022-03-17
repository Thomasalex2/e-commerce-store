import pencil from ".//../graphics/pencils.jpg"
import { Link } from "react-router-dom";

export default function Sign_Up() {
  return (
    <main>
    <div class="form-container">
        <form>
            <h4>Please fill in details below to sign up</h4>
            <label for="fname">First name <span class="required">*</span></label>
            <input type="text" id="fname" name="fname"/>
            <label for="lname">Last name <span class="required">*</span></label>
            <input type="text" id="lname" name="lname"/>
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob"/>
            <label for="email">Email ID <span class="required">*</span></label>
            <input type="text" id="email" name="email" placeholder="name@example.com"/>
            <label for="pwd">Password</label>
            <input type="password" id="password" name="password"/>
            <div class="form-btn-container">
                <button class="primary-btn">Create an Account</button>
            </div>
        </form>
    </div>
  </main>
  );
}