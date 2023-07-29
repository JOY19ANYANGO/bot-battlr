import React from "react";

function BotSpecs({ bot, handleBackToCollection, handleEnlistClick }) {
  return (
    <div className="bot-card">
      <h1>{bot.name}</h1>
      <img src={bot.avatar_url} alt="" />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <p>Created At: {bot.created_at}</p>
      <p>Updated At: {bot.updated_at}</p>
      <div className="button-container">
        <button onClick={handleBackToCollection}>Back to List</button>
        <button onClick={() => handleEnlistClick(bot)}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;
