import { createStore } from "vuex";
import {countryModule} from '@/store/countryModule';

export default createStore ({
    modules: {
        country: countryModule
      }
    
})