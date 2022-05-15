const restaurant = (callback: () => void, time: number) => {
  setTimeout(callback, time);
};
