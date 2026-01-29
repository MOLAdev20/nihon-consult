import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [_, navigate] = useLocation();

  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      navigate("/data");
    }
    document.title = "Login - Nihonskuy Consult";
  }, []);

  const processClick = () => {
    if (
      usernameRef.current.value === "admin" &&
      passwordRef.current.value === "admin"
    ) {
      localStorage.setItem("isLogin", true);
      navigate("/data");
    } else {
      setMsg("Username atau password salah");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-md items-center px-6">
          <div className="w-full rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
            <h1 className="text-2xl font-semibold tracking-tight [font:Georgia,serif]">
              Login
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Masuk untuk melanjutkan.
            </p>
            {msg && <p className="mt-1 text-xs text-red-500">{msg}</p>}

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  ref={usernameRef}
                  placeholder="Username"
                  autoComplete="username"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/50"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/50"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  processClick();
                }}
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
