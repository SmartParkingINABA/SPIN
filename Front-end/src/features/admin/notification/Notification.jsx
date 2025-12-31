import { useState } from "react";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import NotificationTabs from "./components/NotificationTabs";
import BoxWrapper from "../../../components/ui/BoxWrapper";
import QuickTemplates from "./components/Send/QuickTemplates";
import Form from "./components/Send/Form";
import Card from "./components/History/Card";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";

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

const notifications = [
  {
    id: 1,
    title: "Area Parkir Hampir Penuh",
    message:
      "Kapasitas parkir saat ini 85%. Mohon perhatian untuk pengaturan parkir.",
    typeLabel: "Peringatan",
    typeBg: "bg-red-200",
    typeColor: "text-red-600",
    icon: <IoWarningOutline className="text-red-600 w-5" />,
    iconBg: "bg-red-100",
    date: "15/1/2024, 10.30.00",
    readCount: "12/15",
    to: "Petugas Parkir",
  },
  {
    id: 2,
    title: "Pemeliharaan Sistem",
    message:
      "Sistem akan menjalani pemeliharaan pada tanggal 20 Januari 2024, pukul 01:00 - 03:00 WIB.",
    typeLabel: "Informasi",
    typeBg: "bg-blue-200",
    typeColor: "text-blue-600",
    icon: <RiErrorWarningLine className="text-blue-600 w-5" />,
    iconBg: "bg-red-100",
    date: "14/1/2024, 15.00.00",
    readCount: "45/50",
    to: "Semua Pengguna",
  },
  {
    id: 3,
    title: "Perubahan Tarif Parkir",
    message:
      "Mulai tanggal 1 Februari 2024, akan ada penyesuaian tarif parkir. Silakan cek pengumuman lengkap.",
    typeLabel: "Pesan",
    typeBg: "bg-purple-200",
    typeColor: "text-purple-600",
    icon: <LuMessageSquare className="text-purple-600 w-5" />,
    iconBg: "bg-purple-100",
    date: "13/1/2024, 09.00.00",
    readCount: "28/35",
    to: "Pengendara",
  },
];

export default function Notification() {
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
      <Header />
      <StatsGrid />
      <NotificationTabs createMode={createMode} setCreateMode={setCreateMode} />
      {createMode && (
        <>
          <div className="mt-6">
            <BoxWrapper title="Template Cepat">
              <QuickTemplates handleSelectTemplate={handleSelectTemplate} />
            </BoxWrapper>
          </div>
          <div className="mt-6">
            {/* TINGAL FORM */}
            <BoxWrapper title="Buat Notifikasi Baru">
              <Form
                title={title}
                message={message}
                recipient={recipient}
                warning={warning}
                setTitle={setTitle}
                setMessage={setMessage}
                setRecipient={setRecipient}
                setWarning={setWarning}
                handleInput={handleInput}
              />
            </BoxWrapper>
          </div>
        </>
      )}

      {!createMode && (
        <div className="mt-6">
          <BoxWrapper title="Riwayat Notifikasi">
            <div className="mt-3.5 flex flex-col gap-y-3.5">
              {notifications.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </BoxWrapper>
        </div>
      )}
    </section>
  );
}
