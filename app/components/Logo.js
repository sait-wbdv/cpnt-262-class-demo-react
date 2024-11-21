export function Logo({ width = 50, height = 50, logoUrl, logoText }) {
  return (
    <div className="flex items-center gap-4">
      <img src={logoUrl} alt="logo image" width={width} height={height} />
      <h1>{logoText}</h1>
    </div>
  );
}
