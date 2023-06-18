import express from 'express';
import axios from 'axios';

const router = express.Router()
const microservice1 = process.env.URL_COMPANY_BILLING;
const microservice2 = process.env.URL_COMPANY;
const microservice3 = process.env.URL_COMPANY_CUSTOMERS;
const microservice4 = process.env.URL_PRODUCTS;
const microservice5 = process.env.URL_FINAL_CUSTOMER;
const microservice6 = process.env.URL_FINAL_CUSTOMERS_BILLING;
const microservice7 = process.env.URL_COMMAND;

router.post('/company_billing', async (request, response)=>{
    if (request.body){
        try{
            res = await axios.post(microservice1, request.body);
            response.status(200).json(res.data);
        }
        catch(error){
            response.status(500).json({error})
        }
    }
})

router.post('/company',(request, response)=> {
    console.log(request.body);
    response.status(200).send('requête envoyée')
})
router.post('/company_customers',(request, response)=> {
    console.log(request.body);
    response.status(200).send('requête envoyée')
})
router.post('/product',(request, response)=> {
    console.log(request.body);
    response.status(200).send('requête envoyée')
})
router.post('/final_customer',(request, response)=> {
    console.log(request.body);
    response.status(200).send('requête envoyée')
})
router.post('/final_customers_billing',(request, response)=> {
    console.log(request.body);
    response.status(200).send('requête envoyée')
})
router.post('/command',(request, response)=> {
    console.log(request.body);
    response.status(200).send('requête envoyée')
})

export default router;