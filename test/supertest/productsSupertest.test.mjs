import * as chai from 'chai';
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

const productCode = '33456mock'

describe("Supertest del router Products", () => {
    it("El endpoint POST api/backoffice/products debe crear un producto correctamente", async () => {
    const productMock = {
        code: productCode,
        title: 'Producto Mock',
        description: 'Producto para prueba de Supertest',
        price: 1234556,
        thumbnail: ['img.jpg'],
        stock: 123,
        status: true,
        category: 'Mock',
    };
    const { statusCode, ok, _body } = await requester
        .post("/api/products/backoffice")
        .send(productMock);
    console.log(statusCode, ok, _body);
    expect(_body.payload).to.have.property("status").to.be.true;
    });
    it("El endpoint DEL api/backoffice/products/:pcod debe cambiar su status a FALSE", async () => {
        const { statusCode, ok, _body } = await requester
            .delete(`/api/products/backoffice/${productCode}`)
        console.log(statusCode, ok, _body);
        });
    it("El endpoint GET api/products/:pcod debe traer al producto señalado, y su status debe ser FALSE", async () => {
        const { statusCode, ok, _body } = await requester
            .get(`/api/products/${productCode}`)
        console.log(statusCode, ok, _body);
        expect(_body.payload[0]).to.be.an("object").to.have.property("status").to.be.false;
    });
});