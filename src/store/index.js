import { createStore } from 'vuex'
var myjson = require("C:/Users/madha/Downloads/navbar/src/api/db.json")
    // const socksapi = "https://ac.cnstrc.com/browse/collection_id/mens-socks?c=ciojs-client-2.11.4&key=key_zMKm7Za5Dcr0HlmM&i=1b0a007a-8538-4e30-ae6a-7b2576539696&s=150&page=1&num_results_per_page=20&sort_by=relevance&sort_order=descending&_dt=1630218577941"
export default createStore({
    state: {
        datas: [],
        jdata: [],
        subdata: []
    },
    mutations: {
        setdata(state, payload) {
            state.datas = payload
            return state
        },
        jsondata(state, payload) {
            state.jdata = payload
            return state
        },
        subnavdata(state, payload) {
            state.subdata = payload
            return state
        }
    },
    actions: {
        async setdata(state) {
            const datacomin = await fetch("https://ac.cnstrc.com/browse/collection_id/mens-socks?c=ciojs-client-2.11.4&key=key_zMKm7Za5Dcr0HlmM&i=1b0a007a-8538-4e30-ae6a-7b2576539696&s=150&page=1&num_results_per_page=20&sort_by=relevance&sort_order=descending&_dt=1630218577941");
            const res = await datacomin.json();
            const formatdata = res.response.results;
            state.commit("setdata", formatdata)
        },
        async jsondata(state) {
            const resp = myjson[0].navigationType;
            state.commit("jsondata", resp)
        },
        async subnavdata(state) {
            (myjson[0].navigationType).forEach((element) => {
                const resp1 = element;
                state.commit("subnavdata", resp1)
            });
            // for (let index = 0; index < (myjson[0].navigationType).length; index++) {
            // }
        }
    },
    getters: {
        publishdata: state => state.datas,
        givedata: state => state.jdata,
        givesubdata: state => state.subdata,
    }
})