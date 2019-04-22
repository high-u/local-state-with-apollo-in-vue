/*
* If you have any questions, give me a ping on Twitter. @ScottMolinari
* If you've learned something and would like to show your appreciation, 
* please donate a coffee or a beer! I'd be very grateful!
* https://www.patreon.com/user?u=16255660
*/

import Vue from 'vue'
import App from './App'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { resolvers, defaults, typeDefs } from './resolvers'

const client = new ApolloClient({
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
})

const apolloProvider = new VueApollo({
  defaultClient: client
 })

Vue.use(VueApollo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
})
