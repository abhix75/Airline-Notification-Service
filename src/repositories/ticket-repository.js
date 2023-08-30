const CrudRepository = require('./crud-repository');
const{ticket}=require('../models');

class ticketRepository extends CrudRepository{
    constructor(){
        super(ticket);
    }
    
async getPendingTickets(){
    console.log("inside pending tickets")
    const response = await ticket.findAll({
        where:{
            id:1
        }
    });
    return response;
}
}


module.exports= ticketRepository;


