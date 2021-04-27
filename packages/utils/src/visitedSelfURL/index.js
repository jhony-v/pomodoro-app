export default function stepVisitedSelfURL(key = 'visited-url') {
  let urls = [];

  const getItem = () => JSON.parse(localStorage.getItem(key)) || [];
  const setItem = (value) => localStorage.setItem(key, JSON.stringify(value));
  const removeItem = () => localStorage.removeItem(key);

  const currentPath = () => window.location.pathname;

  urls = getItem();

  function verify() {
    return urls.indexOf(currentPath()) !== -1;
  }

  function save() {
    if (!verify()) {
      urls.push(currentPath());
      setItem(urls);
    }
  }

  function remove() {
    if (verify()) {
      if (urls.length === 1) {
        removeItem();
      } else {
        urls.splice(urls.indexOf(currentPath()), 1);
        setItem(urls);
      }
    }
  }

  return {
    save,
    remove,
    verify,
    key,
  };
}
