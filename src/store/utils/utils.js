const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const fetchFn = async (...args) => {
  await pause(1000);
  return fetch(...args);
};
