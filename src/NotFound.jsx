import { Link } from "wouter";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-2xl items-center px-6">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold text-slate-500">404</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Link yang kamu buka tidak tersedia atau sudah dipindahkan.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Kembali ke Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
