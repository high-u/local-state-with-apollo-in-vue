/*
* If you have any questions, give me a ping on Twitter. @ScottMolinari
* If you've learned something and would like to show your appreciation, 
* please donate a coffee or a beer! I'd be very grateful!
* https://www.patreon.com/user?u=16255660
*/

import Vue from 'vue'
import App from './App'
import VueApollo from 'vue-apollo'
import { resolvers, defaults, typeDefs } from './resolvers'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
})

cache.writeData({
  data: {
    todos: [],
  },
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
