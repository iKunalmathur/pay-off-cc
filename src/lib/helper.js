import envVar from "./envVar";

/* Is Object any prop is empty */
export function isObjEmpty(object) {
  let isEmpty = false;

  for (const property in object) {
    if (!isEmpty) {
      isEmpty = object[property].length ? false : true;
    }
  }
  return isEmpty;
}

export const localStorageData = () => {
  const data = JSON.parse(localStorage.getItem(envVar.appName));
  if (data?.cards.length > 0) {
    return { cards: data?.cards };
  }
  return { cards: [] };
};
