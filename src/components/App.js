import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // const [items, setItems]  = useState(itemData); 
 const [isDarkMode, setIsDarkMode] = useState(false);
 const mode = isDarkMode ? "dark" : "light"
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  const appClass = isDarkMode? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* adding an event handler to the dark mode button, and update state when the button is clicked */}
        <button onClick={e=>setIsDarkMode(!isDarkMode)}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
