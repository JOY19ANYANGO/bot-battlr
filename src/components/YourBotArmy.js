import React from "react";

function YourBotArmy({army,handleClickArmy}){
  

   
    return(
        <>
        <h1>Your Bot Army</h1>
        <div className="bot-container">

   {army.map((armyBot)=>(
    <div key={armyBot.id} className="bot" onClick={()=>handleClickArmy(armyBot)} >
        <img src={armyBot.avatar_url} alt=""/>
        <p>name:{armyBot.name}</p>
        <p>Health:{armyBot.health}</p>
        <p>damage:{armyBot.damage}</p>
        <p>armor:{armyBot.armor}</p>
        <p>Class:{armyBot.bot_class}</p>
        <p>catchphrase:{armyBot.catchphrase}</p>
        <p>created_at:{armyBot.created_at}</p>
        <p>updated_at:{armyBot.updated_at}</p>

    </div>
))}
</div>

        </>
    )
}
export default YourBotArmy