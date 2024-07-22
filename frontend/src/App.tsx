import './App.css';

function App() {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = event.target.files ?? [];
    console.log(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('TODO');
  };

  return (
    <>
      <h1> Challenge: Upload CSV + Search</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              onChange={handleInputChange}
              name="file"
              type="file"
              accept=".csv"
            ></input>
          </label>
          <button>Subir Archivo</button>
        </form>
      </div>
    </>
  );
}

export default App;
