export const addSong = ({ title, duration }) => {
  return {
    type: "ADD_SONG",
    song: { title: title, duration: duration }
  };
};
