import React from "react";
import Song from "./Song";

const SongList = ({songs, onSongClicked}) => {
    const songItems = songs.map((song, index) => {
        return <Song song={song} key={index} onSongClicked={onSongClicked} />
    })

    return (
        <div>
            <ul>
                {songItems}
            </ul>
        </div>
    )
}

export default SongList;