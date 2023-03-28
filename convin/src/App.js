import data from "./Data/Data.js";
import Bucket from "./Components/Bucket.js";


function App() {
  return (
    <div className="App">
      {data.map((bucket)=>{
        <Bucket
        key={bucket.id}
        bucketName={bucket.name}
        cards={bucket.cards} 
        />
      })}
      
    </div>
  );
}

export default App;
