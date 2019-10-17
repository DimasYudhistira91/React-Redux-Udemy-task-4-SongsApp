import { combineReducer } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Jadikan Aku Pacarmu', duration: '4:52' },
    { title: 'Laskar Cinta', duration: '4.05' },
    { title: 'Piknik 72', duration: '3.46' },
    { title: 'Ku Tak Bisa', duration: '4.24' },
    { title: 'Virus', duration: '5:22' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducer({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
