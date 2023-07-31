import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";
import Searchbar from "./Searchbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BotSpecs from "./BotSpecs"; // Import the BotSpecs component

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [showArmy, setShowArmy] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null); // New state variable to track the selected bot

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  function handleClick(bot) {
    // Check if the bot is already in the army by comparing their ids
    const isBotInArmy = army.some((armyBot) => armyBot.id === bot.id);
    const isClassInArmy = army.some((armyBot) => armyBot.bot_class === bot.bot_class);
    if (!isBotInArmy && !isClassInArmy) {
      // If the bot is not in the army, add it to the army
      setArmy([...army, bot]);
      // Show a success toast notification
      toast.success("Bot added to your army!", { autoClose: 2000 });
    } else {
      console.log('Bot is already in army');
      toast.warn("Bot is already in your army!", { autoClose: 2000 });
    }
  }

 

  // Function to show the detailed specifications of a bot
  function showBotSpecs(bot) {
    setSelectedBot(bot);
  }

  // Function to go back to the list view from the show view
  function goBackToListView() {
    setSelectedBot(null);
  }
  function handleRemove(bot) {
    const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);
    setArmy(updatedArmy);
    toast.success("Bot removed from your army!", { autoClose: 2000 });
  }

  function handleDeleteClick(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);
        setArmy(updatedArmy);
      })
      .catch((error) => {
        console.error("Error deleting bot:", error);
      });
  }

  function toggleArmyDisplay() {
    setShowArmy(!showArmy);
  }

  function handleSort(sortBy) {
    const sortedBots = [...bots];
    sortedBots.sort((botA, botB) => botB[sortBy] - botA[sortBy]);
    setBots(sortedBots);
  }

    //Filter bots based on the entered class
    const handleSearch = (bot_class) => {
   
      if (bot_class === "" || bot_class === null) {
        //display all the transactions
        fetch("https://api.npoint.io/e5115d936f381a580b81/bots")
      .then((r) => r.json())
      .then((data) => {
        console.log("Fetched data:", data)
      
        setBots(data)
  
       });
      } 
      else {
       
        const filtered = bots.filter((bot) =>
          bot.bot_class.toLowerCase().includes(bot_class.toLowerCase())
        );
       
        setBots(filtered);
        console.log(filtered)
      }
     
   
  };






  return (
    <>
      <button onClick={toggleArmyDisplay} id="armybutton">
        {showArmy ? "Hide Your Bot Army" : "View Your Bot Army"}
      </button>
      {showArmy && <YourBotArmy army={army} handleClickArmy={handleRemove} />}
      <h1>Bot Collection</h1>
      <Searchbar onSearch={handleSearch} />
      <SortBar handleSort={handleSort} />
      {selectedBot ? ( // Check if a bot is selected for the show view
        <BotSpecs
          bot={selectedBot}
          onEnlist={handleClick} // Pass the handleClick function to enlist the selected bot
          onGoBack={goBackToListView} // Pass the goBackToListView function to go back to the list view
        />
      ) : (
        <div className="bot-container">
          {bots.map((bot) => (
            <div key={bot.id} className="bot" >
              <img src={bot.avatar_url} alt="" />
              <p>{bot.name}</p>
              <p>{bot.bot_class}</p>
              <button onClick={() => handleDeleteClick(bot)}>X</button>
              <button onClick={() => showBotSpecs(bot)} id="specs">show specs</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BotCollection;
