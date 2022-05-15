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

const cook = (progress: string): Promise<String> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log("[레스토랑 진행상황 - 음식 조리]");
      resolve(`${progress} -> 음식 조리 중`);
    }, 2000);
  });
};

const serving = (progress: string): Promise<String> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log("[레스토랑 진행상황 - 음식 서빙]");
      resolve(`${progress} -> 음식 서빙 중`);
    }, 3000);
  });
};
