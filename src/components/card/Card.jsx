export default function DataCard({ key, row }) {
  console.log(row);

  const fields = [
    "Nomor WhatsApp",
    "URL atau link Instagram Pribadi",
    "Agama",
    "Tempat tinggal saat ini.",
    "Apakah anda sudah bekerja?",
    "Bidang Pekerjaan yang diinginkan",
    'Sebutkan Bidang Kerja "Lainnya"',
    "Bidang Pekerjaan Saat Ini",
    "Jika Bekerja, Sebutkan bidang pekerjaan anda saat ini",
    "Pengalaman Bekerja di Jepang",
    "Sudah Berapa Lama Belajar Bahasa Jepang?",
    "Sertifikat JFT/JLPT yang sudah dimiliki",
    "Sertifikat SSW yang sudah dimiliki",
    "Visa Saat Ini",
    "Sebutkan VISA Lainnya",
    "Batas Waktu Kartu Zairyu",
    "Wilayah Jepang yang diinginkan Untuk Bekerja",
    "Rencanan Ingin Pindah Kerja?",
    "Alasan Pindah Kerja",
    "Alasan Lebih Detail Pindah Kerja",
    "Alasan Memilih Bidang Pekerjaan Tersebut",
    "Keinginan untuk memakai hijab saat bekerja?",
    "Toleransi Terhadap (masakan yang mengandung) Daging Babi",
    "Toleransi Terhadap Alkohol?",
    "Staff NihonSkuy yang menghubungi anda :",
  ];

  const details = fields
    .map((field) => ({ label: field, value: row[field] ?? "" }))
    .filter((item) => item.value !== "");

  const dateTimestamp = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(row["Timestamp"]));

  return (
    <article
      key={key}
      className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold text-slate-900">
            {row["Nama Lengkap"]}
          </div>
          <div className="mt-0.5 text-xs text-slate-500">
            {row["Nomor WhatsApp"]}
          </div>
        </div>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
          {dateTimestamp}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {details.map((d) => (
          <div key={d.label} className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="text-[11px] font-medium text-slate-500">
              {d.label}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900 wrap-break-word">
              {d.value || "-"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <div className="text-[11px] font-medium text-slate-500">
          Komentar yang Menunjukkan Semangat atau Motivasi Bekerja di Jepang
        </div>
        <p className="mt-1 text-sm text-slate-700 leading-relaxed">
          {
            row[
              "Tuliskan Komentar yang Menunjukkan Semangat atau Motivasi Bekerja di Jepang"
            ]
          }
        </p>
      </div>
    </article>
  );
}
