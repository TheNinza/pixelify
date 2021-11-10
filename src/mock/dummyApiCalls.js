export const dummyEncrypt = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        image:
          "data:image/jpeg;base64,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",
        status_code: "200",
      });
    }, 2000);
  });
};