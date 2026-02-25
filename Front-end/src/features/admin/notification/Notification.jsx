import { useState } from "react";
import Header from "./components/Header";
import StatsGrid from "./components/Stats/StatsGrid";
import QuickTemplate from "./components/QuickTemplate";
import NotificationForm from "./components/NotificationForm";
import { IoWarningOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";

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

export default function Notification() {
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
      <QuickTemplate handleSelectTemplate={handleSelectTemplate} />
      <NotificationForm
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
    </section>
  );
}
