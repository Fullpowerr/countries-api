export default class LocalStorageUtil {
   constructor() {
      this.keyName = 'countryName';
   }

   getCountry() {
      const countryLocalStorage = localStorage.getItem(this.keyName);
      if (countryLocalStorage !== null) {
         return JSON.parse(countryLocalStorage);
      }
      return [];
   }
   putCountry(countryName) {
      const arrStorage = this.getCountry();
      arrStorage.push(countryName);
      localStorage.setItem(this.keyName, JSON.stringify(arrStorage));
      return arrStorage;
   }
}

const localStorageUtil = new LocalStorageUtil();
localStorageUtil.getCountry();
