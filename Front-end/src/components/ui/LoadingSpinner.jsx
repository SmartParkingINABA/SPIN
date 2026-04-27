export default function LoadingSpinner({ size, color }) {
  return (
    <span
      className="block leading-none animate-spin rounded-full border-3 border-solid border-current border-r-transparent"
      style={{
        width: size,
        height: size,
        color,
      }}
    />
  );
}
