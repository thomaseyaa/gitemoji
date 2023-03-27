import { createStore } from "vuex";
import * as actions from "./actions";
import * as state from "./state";
import * as mutations from "./mutations";
import * as getters from "./getters";

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
