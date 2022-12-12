let is_ok = true;

const fetchData = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else {
        reject("Ocurrió un error, pero no se preocupe estamos solucionandolo a la brevedad.");
      }
    }, time);
  });
};

export default fetchData;