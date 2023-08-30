const{EmailService}=require('../services')


async function create(req,res)
{
     try {
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recipentemail:req.body.recipentemail
        });
        return res
                 .status(201)
                 .json(response)
    } catch (error)
     {
        return res
                 .status(500)
                 .json(error)
     }
}
async function getEmails()
{
    try {
        console.log("inside controller")
        const pending = await EmailService.getPendingEmails();
        return pending;
    } catch (error) {
       throw new AppError("Not Able to get All the Airplane objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

module.exports={
    create,
    getEmails
}