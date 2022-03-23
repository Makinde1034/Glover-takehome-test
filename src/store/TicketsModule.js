import ticketsApi from '../api/index.js'

const toggle = {
	namespaced : true,
	state(){

		return{
			tickets : [],
            loadingEvents : false
		}
	},
    getters:{

        filterEvents: (state) => (searchString) => {   
            return state.tickets.find(tic => tic.title === searchString)
        }
        
    },
	actions:{
		async getTickets({commit}){

            try{
                commit("eventsRequest")
                const tickets = await ticketsApi.getTickets();
                const res = await tickets.json();
                commit("setTickets",res)
                console.log(res);
                commit("eventsRequestSuccess")

            }catch(err){
                console.log(err);
                commit("eventsRequestFailure")
            }

        },

	},
	mutations:{
		setTickets(state,payload){
			state.tickets = payload
		},
        eventsRequest(state){
            state.loadingEvents = true
        },
        eventsRequestSuccess(state){
            state.loadingEvents = false
        },
        eventsRequestFailure(state){
            state.loadingEvents = false
        }
	}
}

export default toggle