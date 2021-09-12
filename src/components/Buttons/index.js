import "./styles.css";

export default function Buttons({ next, setNext }) {
  function previousPage(next) {
    if (next > 1) {
      setNext(next - 1);
    } else {
      setNext(next);
    }
  }

  function nextPage(next) {
    if (next < 34) {
      setNext(next + 1);
    }
  }

  return (
    <>
      {next === 1 && (
        <div className="pages page1">
          <button
            onClick={() => {
              nextPage(next);
              console.log(next);
            }}
          >
            Próxima página
          </button>
        </div>
      )}
      {next >= 34 && (
        <div className="pages page34">
          <button onClick={() => previousPage(next)}>Página anterior</button>
        </div>
      )}
      {next > 1 && next < 34 && (
        <div className="pages pagex">
          <button onClick={() => previousPage(next)}>Página anterior</button>
          <button onClick={() => nextPage(next)}>Próxima página</button>
        </div>
      )}
    </>
  );
}
