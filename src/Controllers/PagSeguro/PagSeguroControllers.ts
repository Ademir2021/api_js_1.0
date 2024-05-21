import { Request, Response } from "express";
import fetch from 'node-fetch';
// const authorization_sandbox = '4D1D1C943B1B49468F2D0B00F5EE914E'
const authorization = 'ceb042ab-4491-4258-9e76-bd8e43cd4104764a613f400f95b4014dca1eaa88995b77bb-292a-499c-b941-70f6e5ba0518'
const urlPagseguroPix = 'https://api.pagseguro.com/orders'
const urlPagseguroCard = 'https://api.pagseguro.com/orders'
const urlPagseguroBoleto = 'https://api.pagseguro.com/orders'
const urlPublicKey = 'https://api.pagseguro.com/public-keys'

export class ConttrollersPagSeguro {

    async insertPix(request: Request, response: Response) {
        try {
            const sale = request.body
            const reqs = await fetch(urlPagseguroPix, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                },
                body: JSON.stringify(sale)
            });
            let ress = await reqs.json();
            response.json(ress);
            // console.log(sale)
            // console.log("/* Iniciando Response **/")
            // console.log(ress)
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    };

    async insertBoleto(request: Request, response: Response) {
        try {
            const sale = request.body
            const reqs = await fetch(urlPagseguroBoleto, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                },
                body: JSON.stringify(sale)
            });
            let ress = await reqs.json();
            response.json(ress);
            // console.log(sale)
            // console.log("/*Iniciando Response **/")
            // console.log(ress)
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    };

    async insertCard(request: Request, response: Response) {
        try {
            const sale = request.body
            const reqs = await fetch(urlPagseguroCard, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': authorization,
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(sale)
            });
            const ress = await reqs.json();
            response.json(ress)
            // console.log(sale)
            // console.log("/**Iniciando response */")
            // console.log(ress)
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    };

    async publicKeyPagSeguro(request: Request, response: Response) {
        try {
            const reqs = await fetch(urlPublicKey, {
                method: 'POST',
                headers: {
                    'Authorization': authorization,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ type: 'card' })
            });
            const public_key = await reqs.json();
            response.json(public_key)
        } catch (err) {
            console.log("Error Occurred ! " + err)
        }
    }
}