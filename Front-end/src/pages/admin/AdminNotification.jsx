import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { LuMessageSquare, LuSend, LuUsers } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import AdminDropdownNotificationType from "../../components/admin/AdminDropdownNotificationType";
import AdminDropdownRecipient from "../../components/admin/AdminDropdownRecipient";
import { FaTrashCan } from "react-icons/fa6";

const templates = {
  warning: {
    title: "Area Parkir Hampir Penuh",
    message:
      "Kapasitas parkir saat ini mencapai 85%. Mohon perhatian untuk pengaturan kendaraan masuk.",
    warning: {
      label: "Peringatan",
      icon: IoWarningOutline,
      text: "text-red-600",
    },
    recipient: "Petugas Parkir",
  },
  info: {
    title: "Pemeliharaan Sistem Terjadwal",
    message:
      "Sistem akan menjalani pemeliharaan rutin. Layanan mungkin mengalami gangguan sementara.",
    warning: {
      label: "Informasi",
      icon: RiErrorWarningLine,
      text: "text-blue-600",
    },
    recipient: "Semua Pengguna",
  },
};

export default function AdminNotification() {
  const [createMode, setCreateMode] = useState(true);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("Semua Pengguna");
  const [warning, setWarning] = useState({
    label: "Informasi",
    icon: RiErrorWarningLine,
    text: "text-blue-600",
  });

  const handleInput = (e) => {
    e.target.style.height = "auto"; // reset
    e.target.style.height = e.target.scrollHeight + "px"; // grow
  };

  const handleSelectTemplate = (key) => {
    const template = templates[key];

    if (!template) return;

    setTitle(template.title);
    setMessage(template.message);
    setWarning(template.warning);
    setRecipient(template.recipient);
  };

  return (
    <section className="bg-[#130F40] px-5 py-7 h-[calc(100vh-60px)] overflow-y-auto">
      <h1 className="text-[#FEF8FD] text-2xl font-bold">
        Manajemen Notifikasi
      </h1>
      <p className="text-[#93A3B6] font-medium mt-1">
        Kirim notifikasi dan pengumuman ke pengguna sistem
      </p>
      <div className="mt-6 grid grid-cols-3 gap-x-6">
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-6 py-4 rounded-md">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[#93A3B6] font-medium">Total Notifikasi</p>
            <p className="text-[#FEF8FD] font-medium">3</p>
          </div>
          <div className="bg-blue-100 rounded-sm p-2.5 mt-1">
            <IoMdNotificationsOutline className="text-blue-600 w-6.5 h-fit" />
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-6 py-4 rounded-md">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[#93A3B6] font-medium">Terkirim Hari Ini</p>
            <p className="text-[#FEF8FD] font-medium">0</p>
          </div>
          <div className="bg-green-100 rounded-sm p-2.5 mt-1">
            <LuSend className="text-green-600 w-6.5 h-fit" />
          </div>
        </div>
        <div className="border border-[rgba(255,236,120,0.5)] bg-[#1E1633] flex items-center justify-between px-6 py-4 rounded-md">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[#93A3B6] font-medium">Total Penerima</p>
            <p className="text-[#FEF8FD] font-medium">50 Pengguna</p>
          </div>
          <div className="bg-purple-100 rounded-sm p-2.5 mt-1">
            <LuUsers className="text-purple-600 w-6.5 h-fit" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-x-2 bg-[#93A3B6] p-1 rounded-md w-fit">
        <button
          className={`${
            createMode ? "bg-[#FFDB58]" : "bg-transparent"
          } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
          onClick={() => setCreateMode(true)}
        >
          Kirim Notifikasi
        </button>
        <button
          className={`${
            createMode ? "bg-transparent" : "bg-[#FFDB58]"
          } text-[#130F40] font-medium rounded-sm px-2 py-0.5 cursor-pointer`}
          onClick={() => setCreateMode(false)}
        >
          Riwayat Notifikasi
        </button>
      </div>
      {createMode && (
        <>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Template Cepat</p>
            <div className="mt-3.5 grid grid-cols-2 gap-x-6">
              <div
                className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center gap-x-3 transition opacity-100 hover:opacity-80 cursor-pointer"
                role="button"
                onClick={() => handleSelectTemplate("warning")}
              >
                <div className="bg-red-100 rounded-sm p-1.5">
                  <IoWarningOutline className="text-red-600 w-5.5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">
                    Area Parkir Hampir Penuh
                  </p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Peringatan untuk petugas parkir
                  </p>
                </div>
              </div>
              <div
                className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-center gap-x-3 transition opacity-100 hover:opacity-80 cursor-pointer"
                role="button"
                onClick={() => handleSelectTemplate("info")}
              >
                <div className="bg-blue-100 rounded-sm p-1.5">
                  <RiErrorWarningLine className="text-blue-600 w-5.5 h-fit" />
                </div>
                <div className="">
                  <p className="text-[#FEF8FD] font-medium">
                    Pemeliharaan Sistem
                  </p>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Informasi untuk semua pengguna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
            <p className="text-[#FEF8FD] font-medium">Buat Notifikasi Baru</p>
            <form className="mt-3.5" noValidate>
              <div className="grid grid-cols-2 gap-x-6 mb-2">
                <div>
                  <p className="text-[#FEF8FD] mb-1">Tipe Notifikasi</p>
                  <AdminDropdownNotificationType
                    value={warning}
                    onChange={setWarning}
                  />
                </div>
                <div>
                  <p className="text-[#FEF8FD] mb-1">Penerima</p>
                  <AdminDropdownRecipient
                    value={recipient}
                    onChange={setRecipient}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 mb-2">
                <label htmlFor="title" className="text-[#FEF8FD] font-medium">
                  Judul Notifikasi
                </label>
                <input
                  id="title"
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masukan judul notifikasi"
                  className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-y-1 mb-2">
                <label htmlFor="message" className="text-[#FEF8FD] font-medium">
                  Pesan
                </label>
                <textarea
                  onInput={handleInput}
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan notifikasi disini..."
                  className="bg-[#F5E79E] outline-0 py-2 px-3 rounded-sm resize-none"
                />
              </div>
              <button className="mt-8 border-0 bg-[#FFDB58] py-2 rounded-sm font-medium cursor-pointer transition opacity-100 hover:opacity-80 w-full">
                <div className="flex items-center gap-x-3 mx-auto w-fit">
                  <LuSend className="h-fit w-5 text-[#130F40]" />
                  <p className="text-[#130F40] font-medium">Kirim Notifikasi</p>
                </div>
              </button>
            </form>
          </div>
        </>
      )}

      {!createMode && (
        <div className="mt-6 border border-[rgba(255,236,120,0.5)] bg-[#1E1633] px-6 py-4 rounded-md">
          <p className="text-[#FEF8FD] font-medium">Riwayat Notifikasi</p>
          <div className="mt-3.5 flex flex-col gap-y-3.5">
            <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-start justify-between">
              <div className="flex items-start gap-x-3">
                <div className="bg-red-100 rounded-sm p-2 mt-1">
                  <IoWarningOutline className="text-red-600 w-5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">
                      Area Parkir Hampir Penuh
                    </p>
                    <p className="text-red-600 bg-red-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Peringatan
                    </p>
                  </div>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Kapasitas parkir saat ini 85%. Mohon perhatian untuk
                    pengaturan parkir.
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium flex items-center gap-x-3 mt-1">
                    <span className="flex items-center gap-x-1">
                      <LuUsers className="h-fit w-3" /> Petugas Parkir
                    </span>
                    <span className="flex items-center gap-x-1">
                      <MdOutlineDateRange className="h-fit w-3" /> 15/1/2024,
                      10.30.00
                    </span>
                    <span className="flex items-center gap-x-1">
                      <FaRegCheckCircle className="h-fit w-3" /> 12/15 dibaca
                    </span>
                  </p>
                </div>
              </div>
              <button className="bg-[#FEF8FD] font-medium rounded-sm p-1.5 cursor-pointer opacity-100 hover:opacity-80 transition">
                <FaTrashCan className="w-4 h-fit text-[#B90404]" />
              </button>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-start justify-between">
              <div className="flex items-start gap-x-3">
                <div className="bg-blue-100 rounded-sm p-2 mt-1">
                  <RiErrorWarningLine className="text-blue-600 w-5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">
                      Area Parkir Hampir Penuh
                    </p>
                    <p className="text-blue-600 bg-blue-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Informasi
                    </p>
                  </div>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Kapasitas parkir saat ini 85%. Mohon perhatian untuk
                    pengaturan parkir.
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium flex items-center gap-x-3 mt-1">
                    <span className="flex items-center gap-x-1">
                      <LuUsers className="h-fit w-3" /> Petugas Parkir
                    </span>
                    <span className="flex items-center gap-x-1">
                      <MdOutlineDateRange className="h-fit w-3" /> 15/1/2024,
                      10.30.00
                    </span>
                    <span className="flex items-center gap-x-1">
                      <FaRegCheckCircle className="h-fit w-3" /> 12/15 dibaca
                    </span>
                  </p>
                </div>
              </div>
              <button className="bg-[#FEF8FD] font-medium rounded-sm p-1.5 cursor-pointer opacity-100 hover:opacity-80 transition">
                <FaTrashCan className="w-4 h-fit text-[#B90404]" />
              </button>
            </div>
            <div className="border border-[rgba(255,236,120,0.5)] px-5 py-2.5 rounded-sm bg-[#130F40] flex items-start justify-between">
              <div className="flex items-start gap-x-3">
                <div className="bg-purple-100 rounded-sm p-2 mt-1">
                  <LuMessageSquare className="text-purple-600 w-5 h-fit" />
                </div>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <p className="text-[#FEF8FD] font-medium">
                      Area Parkir Hampir Penuh
                    </p>
                    <p className="text-purple-600 bg-purple-200 text-[12px] rounded-sm px-2 py-0.5 font-medium">
                      Pesan
                    </p>
                  </div>
                  <p className="text-[#93A3B6] text-[14px] font-medium">
                    Kapasitas parkir saat ini 85%. Mohon perhatian untuk
                    pengaturan parkir.
                  </p>
                  <p className="text-[#93A3B6] text-[12px] font-medium flex items-center gap-x-3 mt-1">
                    <span className="flex items-center gap-x-1">
                      <LuUsers className="h-fit w-3" /> Petugas Parkir
                    </span>
                    <span className="flex items-center gap-x-1">
                      <MdOutlineDateRange className="h-fit w-3" /> 15/1/2024,
                      10.30.00
                    </span>
                    <span className="flex items-center gap-x-1">
                      <FaRegCheckCircle className="h-fit w-3" /> 12/15 dibaca
                    </span>
                  </p>
                </div>
              </div>
              <button className="bg-[#FEF8FD] font-medium rounded-sm p-1.5 cursor-pointer opacity-100 hover:opacity-80 transition">
                <FaTrashCan className="w-4 h-fit text-[#B90404]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
