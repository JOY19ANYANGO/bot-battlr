import React from "react";

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
    <div className="bot" id="botspecs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt="" />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <p>Created At: {bot.created_at}</p>
      <p>Updated At: {bot.updated_at}</p>
      <button onClick={() => onEnlist(bot)}id="enlist">Enlist Bot</button>
      <button onClick={onGoBack} id="back">Go Back</button>
    </div>
  );
}

export default BotSpecs;
