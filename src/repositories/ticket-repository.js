const CrudRepository = require('./crud-repository');
const{ticket}=require('../models');

class ticketRepository extends CrudRepository{
    constructor(){
        super(ticket);
    }
    
async getPendingTickets(){
    const response = await ticket.findAll({
        where:{
            status: 'PENDING'
        }
    });
    return response;
}
}


module.exports= ticketRepository;


