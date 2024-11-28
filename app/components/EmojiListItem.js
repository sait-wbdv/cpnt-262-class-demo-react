export function EmojiListItem({ emoji }) {
  return (
    <li key={emoji.id}>
      <img src={emoji.images.fixed_height.url} alt={emoji.title} />
      <p>{emoji.title}</p>
    </li>
  );
}
