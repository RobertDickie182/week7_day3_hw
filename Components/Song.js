import React from "react";

const Song = ({song, onSongClicked}) => {

    const handleClick = function(){
        onSongClicked(song);
    }

  return (
    <li onClick={handleClick}>{song.feed.entry[0]["im:name"]}</li>
  )

}
export default Song;