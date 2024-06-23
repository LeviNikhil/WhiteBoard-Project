import Board from "./components/Board";
import ToolBar from "./components/ToolBar";
import BoardProvider from "./store/BoardProvider";

function App() {
  return (
    <BoardProvider>
        <Board />
        <ToolBar/>
    </BoardProvider> 
);
}

export default App;
