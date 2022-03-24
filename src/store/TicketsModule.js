
import ticketsApi from '../api/index.js'

const toggle = {
	namespaced : true,
	state(){

		return{
			tickets : [],
            loadingEvents : false,
            searchedEvents : [],
            searchValue : ""

            
		}
	},
    
	actions:{
		async getTickets({commit}){

            try{
                commit("eventsRequest")
                const tickets = await ticketsApi.getTickets();
                const res = await tickets.json();
                commit("setTickets",res)
                
                commit("eventsRequestSuccess")

            }catch(err){
                
                commit("eventsRequestFailure")
            }

        },

        // search event
        searchEvent({commit,state},text){
            console.log(state.tickets.length)
            if(text.length === 0 ){
                return commit("setSearchEvents",[])
            }

            const filtered = state.tickets.filter(ticket=> {

                if(ticket.artist ){
                    // deep  search events
                    return ticket.artist.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
                }

               
            })
            commit("setSearchEvent",filtered)
            console.log(filtered, ' --pppp')
            commit("dkd")
        },

        setSearchValue({commit},searchValue){
            commit("setSearchValue",searchValue)
        }

       

        

        

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
        },
        setSearchEvent(state,payload){
            state.searchedEvents = payload
        },
        // set search value
        setSearchValue(state,payload){
            state.searchValue = payload
        }

       
	}
}

export default toggle