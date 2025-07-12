import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [userType, setUserType] = useState("admin");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // Remove this entire block, as it is not valid inside the function body and is duplicated in the return statement.

  // Handle signup submit
  const handleSignup = (e) => {
    e.preventDefault();
    if (userType === "admin") {
      if (
        !form.username ||
        !form.email ||
        !form.password ||
        !form.confirmPassword
      ) {
        setError("Please fill in all fields.");
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    } else {
      if (
        !form.fullName ||
        !form.email ||
        !form.phone ||
        !form.password ||
        !form.confirmPassword
      ) {
        setError("Please fill in all fields.");
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }
    setError("");
    navigate("/dashboard");
  };

  return (
    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
        {/* Navigation for user type */}
        <div class="flex justify-center gap-4 pb-4">
          <button
            type="button"
            class={`px-4 py-2 rounded-lg font-bold ${
              userType === "admin"
                ? "bg-[#19a1e5] text-white"
                : "bg-[#f0f3f4] text-[#111518]"
            }`}
            onClick={() => setUserType("admin")}
          >
            Administrator
          </button>
          <button
            type="button"
            class={`px-4 py-2 rounded-lg font-bold ${
              userType === "citizen"
                ? "bg-[#19a1e5] text-white"
                : "bg-[#f0f3f4] text-[#111518]"
            }`}
            onClick={() => setUserType("citizen")}
          >
            Citizen
          </button>
        </div>
        <h2 class="text-[#111518] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          {userType === "admin"
            ? isSignIn
              ? "Administrator Sign In"
              : "Administrator Registration"
            : isSignIn
            ? "Citizen Sign In"
            : "Citizen Registration"}
        </h2>
        {error && (
          <div class="text-red-500 text-center mb-2 font-semibold">{error}</div>
        )}
        {/* Form for selected user type */}
        <form onSubmit={handleSignup}>
          {userType === "admin" ? (
            isSignIn ? (
              <>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label class="flex flex-col min-w-40 flex-1">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username or Email"
                      value={form.username}
                      onChange={handleChange}
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label class="flex flex-col min-w-40 flex-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div class="flex px-4 py-3">
                  <button
                    type="submit"
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span class="truncate">Sign In</span>
                  </button>
                </div>
                <div class="flex px-4 py-3 justify-center">
                  <button
                    type="button"
                    class="text-[#19a1e5] text-sm font-bold underline"
                    onClick={() => setIsSignIn(false)}
                  >
                    Don't have an account? Sign Up
                  </button>
                </div>
                <p class="text-[#637c88] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                  Security Tips: Use a strong, unique password with a mix of
                  characters.
                </p>
              </>
            ) : (
              <>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label class="flex flex-col min-w-40 flex-1">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={form.username}
                      onChange={handleChange}
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label class="flex flex-col min-w-40 flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label class="flex flex-col min-w-40 flex-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleChange}
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label class="flex flex-col min-w-40 flex-1">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                    />
                  </label>
                </div>
                <div class="flex px-4 py-3">
                  <button
                    type="submit"
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span class="truncate">Sign Up</span>
                  </button>
                </div>
                <div class="flex px-4 py-3 justify-center">
                  <button
                    type="button"
                    class="text-[#19a1e5] text-sm font-bold underline"
                    onClick={() => setIsSignIn(true)}
                  >
                    Already have an account? Sign In
                  </button>
                </div>
                <p class="text-[#637c88] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                  Security Tips: Use a strong, unique password with a mix of
                  characters.
                </p>
              </>
            )
          ) : isSignIn ? (
            <>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex px-4 py-3">
                <button
                  type="submit"
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Sign In</span>
                </button>
              </div>
              <div class="flex px-4 py-3 justify-center">
                <button
                  type="button"
                  class="text-[#19a1e5] text-sm font-bold underline"
                  onClick={() => setIsSignIn(false)}
                >
                  Don't have an account? Sign Up
                </button>
              </div>
              <p class="text-[#637c88] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Security Tips: Use a strong, unique password with a mix of
                characters.
              </p>
            </>
          ) : (
            <>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637c88] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>
              <div class="flex px-4 py-3">
                <button
                  type="submit"
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Sign Up</span>
                </button>
              </div>
              <div class="flex px-4 py-3 justify-center">
                <button
                  type="button"
                  class="text-[#19a1e5] text-sm font-bold underline"
                  onClick={() => setIsSignIn(true)}
                >
                  Already have an account? Sign In
                </button>
              </div>
              <p class="text-[#637c88] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Security Tips: Use a strong, unique password with a mix of
                characters.
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
