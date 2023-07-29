import React from "react";
function YourBotArmy({army,handleClickArmy}){
  
   
    return(
        <>
        <h1>Your Bot Army</h1>
        <div className="bot-container">

   {army.map((armyBot)=>(
    <div key={armyBot.id} className="bot" onClick={()=>handleClickArmy(armyBot)} >
        <img src={armyBot.avatar_url} alt=""/>
        <p>{armyBot.name}</p>
        <p>{armyBot.health}</p>
        <p>{armyBot.damage}</p>
        <p>{armyBot.armor}</p>
        <p>{armyBot.bot_class}</p>
        <p>{armyBot.catchphrase}</p>
        <p>{armyBot.created_at}</p>
        <p>{armyBot.updated_at}</p>

    </div>
))}
</div>

        </>
    )
}
export default YourBotArmy