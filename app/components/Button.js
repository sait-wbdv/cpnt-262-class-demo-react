export function Button() {
  return (
    <>
      <h1>Just testing this Button works</h1>
      <button>CLICK ME</button>
    </>
  );
}

export function List() {
  return (
    <>
      {/* Hello world */}
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
