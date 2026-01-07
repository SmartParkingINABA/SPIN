export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  icon,
  children,
  htmlFor,
}) {
  const Icon = icon;

  return (
    <div className="mb-3">
      <label
        htmlFor={htmlFor}
        className="text-[#FEF8FD] font-bold text-[15px] ml-2.5"
      >
        {label}
      </label>
      <div className="flex items-center gap-x-4 bg-[#F5E79E] py-3 px-5 mt-2 rounded-md">
        {Icon && <Icon className="w-7 h-fit" />}
        <input
          id={htmlFor}
          name={htmlFor}
          type={type}
          value={value}
          placeholder={placeholder}
          className="w-full outline-0 bg-transparent"
          onChange={onChange}
          autoComplete="off"
        />
        {children}
      </div>
      <p className="mt-1.5 ml-2.5 text-red-500 font-bold text-[10px]">
        {error}
      </p>
    </div>
  );
}
