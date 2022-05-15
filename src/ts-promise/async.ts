const restaurant = (callback: () => void, time: number) => {
  setTimeout(callback, time);
};

const order = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log("[레스토랑 진행상황 - 음식 주문]");
      resolve("음식 주문 시작");
    }, 1000);
  });
};
