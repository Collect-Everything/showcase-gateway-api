import express from "express";
import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";
import { Company } from "./utils/types";

dotenv.config({ path: "./.env" });

const router = express.Router();
const microservice1 = process.env.URL_COMPANY_INVOCING_SERVICE;
const microservice2 = process.env.URL_COMPANY_SERVICE;
const microservice3 = process.env.URL_COMPANY_USERS_SERVICE;
const microservice4 = process.env.URL_PRODUCTS_SERVICE;
const microservice5 = process.env.URL_CUSTOMER_SERVICE;
const microservice6 = process.env.URL_CUSTOMERS_INVOICING_SERVICE;
const microservice7 = process.env.URL_ORDER_SERVICE;

const header = {
  headers: {
    "X-Custom-Header": "Showcase-gateway-API-data",
  },
};

console.log(microservice2);

router.post("/company_invocing", async (request, response) => {

});

router.post("/company", async (request, response) => {

  if (request.body) {
    try {
      const res : AxiosResponse<Company> = await axios.post<Company>(
        `${microservice2}/create`,
        request.body,
        header
      );
      console.log(res.data);
      response.status(200).json(res.data);
      
    } catch (error) {
      response.status(500).json({ error });
    }
  }
});
router.post("/company_users", (request, response) => {});
router.post("/products", (request, response) => {
  console.log(request.body);
  response.status(200).send("requête envoyée");
});
router.post("/customer", (request, response) => {
  console.log(request.body);
  response.status(200).send("requête envoyée");
});
router.post("/customers_invoicing", (request, response) => {
  console.log(request.body);
  response.status(200).send("requête envoyée");
});
router.post("/order", (request, response) => {
  console.log(request.body);
  response.status(200).send("requête envoyée");
});

export default router;
