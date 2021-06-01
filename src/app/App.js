
import './App.css';
import SudokuTable from "../components/SudokuTable";
function App() {
  const test = [[1  ,'.','.','.','.','.','.', '.', 7 ],
                ['.','.','.','.', 8 , 3 , 5 ,  6 ,'.'],
                ['.','.',8  ,6  ,'.',7  ,'.','.', '.'],
                [ 8 ,'.','.',4  ,'.','.',1  ,7  ,'.' ],
                [4,'.',5,'.','.','.',2,'.',6],
                ['.','.',6,'.',3,'.','.','.','.'],
                ['.',8,4,2,'.',6,9,1,5],
                ['.',2,1,'.',5,'.','.','.','.'],
                ['.',7,9,3,1,4,6,'.',8],
                ]
  return (
    <div className="App">
      <SudokuTable numbers ={test} />
    </div>
  );
}

export default App;
