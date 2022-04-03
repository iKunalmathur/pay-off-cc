import envVar from "./envVar";

/* Is Object any prop is empty */
export function isObjEmpty(object) {
  let isEmpty = false;

  for (const property in object) {
    // console.log(`${property}: ${object[property]}`);
    if (!isEmpty) {
      isEmpty = object[property].length ? false : true;
    }
  }
  return isEmpty;
}

export const localStorageData = () => {
  const { cards } = JSON.parse(localStorage.getItem(envVar.appName)) ?? [];
  return { cards };
};
