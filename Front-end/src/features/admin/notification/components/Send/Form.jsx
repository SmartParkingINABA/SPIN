import NotificationTypeDropdown from "./NotificationTypeDropdown";
import RecipientDropdown from "./RecipientDropdown";
import { LuSend } from "react-icons/lu";

export default function Form({
  title,
  message,
  recipient,
  warning,
  setTitle,
  setMessage,
  setRecipient,
  setWarning,
  handleInput,
}) {
  return (
    <form className="mt-3.5" noValidate>
      <div className="grid grid-cols-2 gap-x-6 mb-2">
        <div>
          <p className="text-[#FEF8FD] mb-1">Tipe Notifikasi</p>
          <NotificationTypeDropdown value={warning} onChange={setWarning} />
        </div>
        <div>
          <p className="text-[#FEF8FD] mb-1">Penerima</p>
          <RecipientDropdown value={recipient} onChange={setRecipient} />
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
  );
}
