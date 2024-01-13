const leftSection = document.querySelector(".left");
const adminlogin = document.querySelector(".adminloginbtn");

adminlogin.addEventListener("click", () => {
  leftSection.innerHTML = `   <div class="form">
    <div class="form_header flex_center">
        <h2>Admin Login</h2>
    </div>
    <form >
        <div class="form_input flex flex_col">
            <label for="emailphone">
                Admin ID
            </label>
            <input type="text" placeholder="Admin ID" id="emailphone">
        </div>
        <div class="form_input flex flex_col">
            <label for="Security">
                Security ID
            </label>
            <div class="passdiv">
                            <input type="password" placeholder="Security ID" id="Security"
                            >
                            <div class="verify eye">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </div>
                        </div>
        </div>
        <div class="form_input flex flex_col">
            <label for="password">
                PASSWORD
            </label>
            <div class="passdiv">
            <input type="password" placeholder="Password" id="password"
            >
            <div class="verify eye">
                <span class="material-symbols-outlined">
                    visibility
                </span>
            </div>
        </div>
        <a href="./forgetpass.html">
        <p>Forget Password?</p>
    </a>
        </div>
        
        <div class="login_btn flex_center ">
        <div class="flex_center gap userloginbtn" onClick="reload()">
        <input type="radio" name="login" id="userlogin">
        <label for="userlogin">User Login</label>
        </div>
            <div class="flex_center gap adminloginbtn">
                <input type="radio" checked name="login" id="adminlogin">
                <label for="adminlogin">Admin Login</label>
            </div>
        </div>
        <button class="submitbtn">Login</button>
        <p class="nam">Not a member?
            <a href="./signup.html">Signup</a>
        </p>
    </form>
</div> `;

});

function reload(){
    location.reload()
}
