import "./App.css";
import Child from "./Components/child";
import Dog from "./Components/dog";
import DynamicEvents from "./Components/dynamicevents";
import FirstExample from "./Components/firstExample";
import FourthExample from "./Components/fourthExample";
import InputComponent from "./Components/input";
import ModeToggler from "./Components/ModeToggler";
import Promo from "./Components/promo";
import RegisterForm from "./Components/registrationform";
import SecondExample from "./Components/secondExample";
import TextInputWithFocusButton from "./Components/textinputwithbutton";
import ThirdExample from "./Components/thirdExample";

function App() {
  const date = new Date();
  return (
    <div>
      <FirstExample />
      <SecondExample />
      <ThirdExample />
      <FourthExample />
      <ModeToggler />
      <DynamicEvents />
      <Promo />
      <Dog />
      <Child message={date.toLocaleTimeString()} />
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
