
import Forecast from "./comp/Forecast";

function App() {
  return (
    <div className="App w-full  flex justify-center min-h-screen items-center flex-col text-white">
      <div className="bg-gradient-to-br from-red-700 to-blue-700 shadow-xl shadow-gray-400 px-9 mx-40">
        <Forecast />
      
      </div>
    </div>
  );
}

export default App;
