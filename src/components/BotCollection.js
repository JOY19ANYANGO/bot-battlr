import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [showArmy, setShowArmy] = useState(false); // New state variable

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  function handleClick(bot) {
    // Check if the bot is already in the army by comparing their ids
    const isBotInArmy = army.some((armyBot) => armyBot.id === bot.id);
     const isClassInArmy=army.some((armyBot)=>armyBot.bot_class===bot.bot_class)
    if (!isBotInArmy && !isClassInArmy) {
      // If the bot is not in the army, add it to the army
      setArmy([...army, bot]);
    } else {
      console.log('Bot is already in army');
    }
  }

  function handleRemove(bot) {
    // Remove the bot from the army
    const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);
    setArmy(updatedArmy);
  }
  
  function handleDeleteClick(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);
        setArmy(updatedArmy);
    });
  }

  // Function to toggle the display of YourBotArmy
  function toggleArmyDisplay() {
    setShowArmy(!showArmy);
  }
  function handleSort(sortBy) {
    // Create a copy of the bots array to avoid mutating the original state
    const sortedBots = [...bots];

    // Use the Array.sort() method to sort the bots based on the selected attribute
    sortedBots.sort((botA, botB) => botB[sortBy] - botA[sortBy]);

    // Update the state with the sorted bots
    setBots(sortedBots);
  }

  return (
    <>
      <button onClick={toggleArmyDisplay} id="armybutton">
        {showArmy ? "Hide Your Bot Army" : "View Your Bot Army"}
      </button>
      {showArmy && <YourBotArmy army={army} handleClickArmy={handleRemove} />}
      <h1>Bot Collection</h1>
      <SortBar handleSort={handleSort} />
      <div className="bot-container">
        {bots.map((bot) => (
          <div key={bot.id} className="bot" onClick={() => handleClick(bot)}>
            <img src={bot.avatar_url} alt="" />
            <p>{bot.name}</p>
            <p>{bot.health}</p>
            <p>{bot.damage}</p>
            <p>{bot.armor}</p>
            <p>{bot.bot_class}</p>
            <p>{bot.catchphrase}</p>
            <p>{bot.created_at}</p>
            <p>{bot.updated_at}</p>  
            <button onClick={() => handleDeleteClick(bot)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BotCollection;
