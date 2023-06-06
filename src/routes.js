const datauser = require('./datauser')
const {tambahuser, lihatData, login} = require('./handler')
const routes = [

    
    
        {
            method: 'GET',
            path: '/register',
            handler: lihatData
        },

        {
            method: 'POST',
            path: '/kirim',
            handler: tambahuser
        },

        {
            method: 'POST',
            path: '/login',
            handler: login
        }
    
]

module.exports = routes