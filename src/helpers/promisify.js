export async function promisify(func, ...args) {
  return await new Promise(async (res, rej) => {
    func(...args, (...response) => {
      res([...response]);
    });
  });
}
