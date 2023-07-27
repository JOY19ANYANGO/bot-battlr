import React,{useEffect,useState} from "react";

function  BotCollection(){
    const [bots,setBots]=useState([])
    useEffect(()=>{
        fetch(' http://localhost:8001/bots')
        .then((r)=>r.json())
        .then((data)=>setBots(data))
    },[])
    return(
        <div className="bot-container">
        {bots.map((bot)=>(
            <div key={bot.id} className="bot-frame">
                <img src={bot.avatar_url}/>
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
    )
}
export default BotCollection