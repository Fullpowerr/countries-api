import { requestCountries } from '@/api/get-api';

export const countryModule = {
   state: () => ({
      countryName: '',
      borderName: '',
      countries: [],
      searchQuery: null,
      countryData: [],
      region: [
         { value: 'Asia', name: 'Asia' },
         { value: 'Africa', name: 'Africa' },
         { value: 'Americas', name: 'Americas' },
         { value: 'Oceania', name: 'Oceania' },
         { value: 'Europe', name: 'Europe' },
      ],
      selectedSort: '',
      isActiv: false,
      page: 0,
      offsetEnd: 25,
      offsetStart: 0,
   }),
   getters: {
      search_country(state) {
         if (!state.searchQuery) {
            return state.countries;
         } else {
            return state.countries.filter((country) =>
               country.name.common
                  .toLowerCase()
                  .includes(state.searchQuery.toLowerCase())
            );
         }
      },
      filteredRegion(state, getters) {
         return getters.search_country.filter((country) =>
            country.region
               .toLowerCase()
               .includes(state.selectedSort.toLowerCase())
         );
      },
      pagination(state, getters) {
         return getters.filteredRegion.slice(
            state.offsetStart,
            state.offsetEnd
         );
      },
   },
   mutations: {
      setCountries(state, countries) {
         state.countries = countries;
         localStorage.setItem('All countries', JSON.stringify(countries));
      },
      setSelectedSort(state, selectedSort) {
         state.selectedSort = selectedSort;
      },
      setSearchQuery(state, searchQuery) {
         state.searchQuery = searchQuery;
      },
      setBorderName(state, payload) {
         state.borderName = payload;
      },
      setRegion(state, region) {
         state.region = region;
      },
      setCountryData(state, countryData) {
         state.countryData =
            countryData.length > 1
               ? countryData.filter(
                    (item) => item.name.common === state.countryName
                 )
               : countryData;
      },
      setCountryName(state, payload) {
         state.countryName = payload;
      },
      setSearchCountry(state, searchCountry) {
         state.searchCountry = searchCountry;
      },
      darkTheme(state) {
         state.isActiv = true;
      },
      lightTheme(state) {
         state.isActiv = false;
      },
      setLocalStorage(state) {
         if (localStorage.getItem(state.countryName) === null) {
            localStorage.setItem(
               state.countryName,
               JSON.stringify(state.countryData)
            );
         } else {
            localStorage.getItem(state.countryName);
         }
      },
      setPage(state, payload) {
         state.page = payload;
         if (state.page >= 1) {
            state.offsetStart = state.page * 25 - 25;
         } else {
            return state.offsetStart;
         }
      },
      setOffsetStart(state, payload) {
         state.offsetStart = payload;
      },
      setOffsetEnd(state, payload) {
         state.offsetEnd = payload;
      },
   },

   actions: {
      async fetchCountries({ commit }) {
         try {
            const response = await requestCountries.get('all');
            commit('setCountries', response.data);
         } catch (e) {
            alert('ERROR');
         }
      },

      async fetchCountry({ commit }, countryName) {
         try {
            const response = await requestCountries.get(`/name/${countryName}`);
            commit('setCountryData', response.data);
            console.log('fetchCountry');
            commit('setLocalStorage');
         } catch (e) {
            alert('ERROR');
         }
      },

      async fetchBorderCountries({ commit }, borderName) {
         try {
            const response = await requestCountries.get(`/alpha/${borderName}`);
            commit('setCountryData', response.data);
            console.log('fetchBorderCountries');
         } catch (e) {
            alert('ERROR');
         }
      },
   },
   namespaced: true,
};
