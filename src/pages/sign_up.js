export default function SignUp() {
  return (
    <main>
    <div className="form-container">
        <form>
            <h4>Please fill in details below to sign up</h4>
            <label htmlFor="fname">First name <span className="required">*</span></label>
            <input type="text" id="fname" name="fname"/>
            <label htmlFor="lname">Last name <span className="required">*</span></label>
            <input type="text" id="lname" name="lname"/>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob"/>
            <label htmlFor="email">Email ID <span className="required">*</span></label>
            <input type="text" id="email" name="email" placeholder="name@example.com"/>
            <label htmlFor="pwd">Password</label>
            <input type="password" id="password" name="password"/>
            <div className="form-btn-container">
                <button className="primary-btn">Create an Account</button>
            </div>
        </form>
    </div>
  </main>
  );
}