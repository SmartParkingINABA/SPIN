export default function PasswordReset() {
  return (
    <div className="bg-[#1E1633] font-ubuntu h-screen w-full flex justify-center items-center">
      <div className="w-1/4">
        <h1 className="text-[#ffec78] text-[1.8rem] font-bold mb-4">
          Password Reset
        </h1>
        <p className="text-white font-semibold leading-6.5">
          Your password has been successfully reset, click confirm to set a new
          password
        </p>
        <button className="w-full bg-transparent border border-[#ffec78] text-[#ffec78] text-[25px] font-bold py-2.5 mt-30 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:border-transparent hover:bg-[#ffec78] hover:text-[#1E1633]">
          Confirm
        </button>
      </div>
    </div>
  );
}
