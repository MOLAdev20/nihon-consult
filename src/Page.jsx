import { useEffect, useState } from "react";
import DataCard from "./components/card/Card";
import Navbar from "./components/Navbar";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-base font-semibold text-slate-900">{value}</div>
    </div>
  );
}

/**
 * Template halaman untuk menampilkan data dari Google Form (via Google Sheets).
 *
 * Membuatkan komponen-komponen berikut:
 * - Navbar
 * - Search Bar
 * - Cards untuk menampilkan data
 *
 * @returns {JSX.Element} Komponen Page
 */
const Page = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://script.google.com/macros/s/AKfycbyrdPIGKrF3xiXqhre3OwFRh6zwld8maAvLGNBIOSMvny_CcwraPPGxnFXPwjpjwvbrPA/exec";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // sort by date timestamp
        data.data.sort((a, b) => {
          return new Date(b["Timestamp"]) - new Date(a["Timestamp"]);
        });

        setData(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    document.title = "Responses - Nihonskuy Consult";
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredData = normalizedSearch
    ? data.filter((row) =>
        String(row["Nama Lengkap"] ?? "")
          .toLowerCase()
          .includes(normalizedSearch),
      )
    : data;

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Responses
                </h1>
                <p className="mt-1 text-sm text-slate-600">
                  Template halaman untuk menampilkan data dari Google Form (via
                  Google Sheets).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <StatPill label="Total data" value={data.length} />
                <StatPill label="Ditampilkan" value={filteredData.length} />
              </div>
            </section>

            {/* Search Bar */}
            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    Search
                  </label>
                  <input
                    placeholder="Cari berdasarkan nama..."
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setSearchTerm(searchInput);
                      }
                    }}
                    className={cn(
                      "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3",
                      "text-sm text-slate-900 placeholder:text-slate-400",
                      "shadow-sm focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100",
                    )}
                  />
                </div>

                <div className="pt-0 sm:pt-6">
                  <button
                    type="button"
                    onClick={() => setSearchTerm(searchInput)}
                    className={cn(
                      "w-full sm:w-auto rounded-2xl bg-slate-900 px-5 py-3",
                      "text-sm font-semibold text-white shadow-sm",
                      "hover:bg-slate-800 active:scale-[0.99]",
                    )}
                  >
                    Search
                  </button>
                </div>
              </div>
            </section>

            {/* Cards */}
            <section>
              {loading ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
                  <div className="text-sm font-semibold text-slate-900">
                    Loading data...
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Mohon tunggu sebentar.
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredData.map((item) => (
                    <DataCard key={item.id} row={item} />
                  ))}
                </div>
              )}

              {!loading && data.length > 0 && filteredData.length === 0 && (
                <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
                  <div className="text-sm font-semibold text-slate-900">
                    Data tidak ditemukan
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Coba ganti keyword pencarian.
                  </div>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
