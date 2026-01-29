import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useLocation } from "wouter";

const Navbar = () => {
  const [_, navigate] = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    const confirm = window.confirm(
      "Apakah anda yakin ingin keluar dari akun ini?",
    );

    if (confirm) {
      localStorage.removeItem("isLogin");
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white border p-2 flex justify-center items-center">
            <img src={logo} width={"13px"} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">
              Nihonskuy Consult
            </div>
            <div className="text-xs text-slate-500">Dashboard</div>
          </div>
        </div>

        {/* <nav className="hidden items-center gap-6 md:flex">
          <a
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
            href="#"
          >
            Responses
          </a>
          <a
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
            href="#"
          >
            About
          </a>
        </nav> */}

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            Data
          </button>
          <button
            onClick={() => logout()}
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
