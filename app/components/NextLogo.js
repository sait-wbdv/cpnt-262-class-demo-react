export function NextLogo({ width = 100, height = 100, logoUrl, logoText }) {
  return (
    <div className="flex items-center gap-4">
      <img src={logoUrl} alt="logo image" width={width} height={height} />
      <h1>{logoText}</h1>
    </div>
  );
}
