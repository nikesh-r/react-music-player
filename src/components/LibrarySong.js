import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    const allSongs = songs.map((selectedSong) => {
      if (selectedSong.id === song.id) {
        return { ...selectedSong, active: true };
      } else {
        return { ...selectedSong, active: false };
      }
    });
    setSongs(allSongs);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
