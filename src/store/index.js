
import {createStore} from 'vuex'
import TicketModule from './TicketsModule.js'

const store = createStore({
    modules:{
        TicketModule
    }
})

export default store