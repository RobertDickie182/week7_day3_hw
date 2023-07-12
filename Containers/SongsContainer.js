import React, { useState, useEffect } from "react";
import SongList from "../Components/SongList";
import Song from "../Components/Song";




const SongsContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        getSongs();
    }, [])


const onSongClicked = function(song){
    setSelectedSong(song);
}

const getSongs = async function(){
    const res = await fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json");
    const songs = await res.json;
    setSongs(data.feed.entry[0]["im:name"])
    
}

return (
    <div className="main-container">
        <SongList songs={songs} onSongClicked={onSongClicked} />
    </div>
)
}

export default SongsContainer;