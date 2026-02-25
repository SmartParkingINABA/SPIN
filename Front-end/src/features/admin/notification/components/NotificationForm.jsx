import BoxWrapper from "../../../../components/ui/BoxWrapper";
import Form from "./Send/Form";

export default function NotificationForm({
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
  );
}
