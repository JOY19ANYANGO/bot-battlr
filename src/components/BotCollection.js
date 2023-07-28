import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  function handleClick(bot) {
    // Check if the bot is already in the army by comparing their ids
    const isBotInArmy = army.some((armyBot) => armyBot.id === bot.id);

    if (!isBotInArmy) {
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

  return (
    <>
      <YourBotArmy army={army} handleClickArmy={handleRemove} />
      <h1>Bot Collection</h1>
      <div className="bot-container">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-frame" onClick={() => handleClick(bot)}>
            <img src={bot.avatar_url} alt="" />
            <p>{bot.name}</p>
            <p>{bot.health}</p>
            <p>{bot.damage}</p>
            <p>{bot.armor}</p>
            <p>{bot.bot_class}</p>
            <p>{bot.catchphrase}</p>
            <p>{bot.created_at}</p>
            <p>{bot.updated_at}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BotCollection;
