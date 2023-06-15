const express = require('express');
const mailsender = require('./config/email-config')
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    try {
        const response = await mailsender.sendMail({
            from: ServerConfig.GMAIL_EMAIL,
            to: 'testingabhijit863@gmail.com',
            subject:'Is the Service Working ? now as well',
            text:'YES IT IS WORKING PROPERLY'
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});
