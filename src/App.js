import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {

  function calculateBMI(height, weight){
    if(!height || !weight) return
    let result = 0
    if(height > 100){
      result = (weight / Math.pow(height, 2))
    }
    result = (weight / Math.pow((height / 100), 2))

    let range = ''
    if(result => 40) range = 'Obese'
    if(result < 24.9) range = 'Normal'
    if(result < 18.4) range = 'Underweight'
    

    return {result: result.toFixed(1), range: range}
  }


  return (
    <div className="min-h-[100vh]">
      <Header/>
      <Main calculateBMI={calculateBMI}/>
      <Footer />
    </div>
  );
}

export default App;
