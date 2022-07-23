import "./App.css";
import { auth } from "./firebase"; 
import SignIn from "./components/SignIn";
import Line from "./components/Line";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  // 認証してるユーザ情報
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? (
        <Line/>
      ):(
        <SignIn/>
      )}
    </div>
  );
}

export default App;