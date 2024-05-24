import * as chai from 'chai';
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

const cartCode = '58285465-d370-4bfd-802d-f5d944abcba4'
const prodCode = '64b8ae2fc0b9927e5c91c998'
describe("Supertest del router Carts", () => {
    it("El endpoint GET api/carts/:cId debe traer al carrito señalado y su array de productos debe estar vacío", async () => {
        const { statusCode, ok, _body } = await requester
            .get(`/api/carts/${cartCode}`)
        console.log(statusCode, ok, _body);
        expect(_body.payload.products).to.be.an("array").to.be.empty;
    });
    it("El endpoint PUT api/carts/:cId/products/:pId debe cargar un producto al carrito", async () => {
    const { statusCode, ok, _body } = await requester
        .put(`/api/carts/${cartCode}/products/${prodCode}`)
    console.log(statusCode, ok, _body);
    });
    it("El endpoint GET api/carts/:cId debe traer al carrito señalado y su array de productos debe contener 1 producto", async () => {
        const { statusCode, ok, _body } = await requester
            .get(`/api/carts/${cartCode}`)
        console.log(statusCode, ok, _body);
    expect(_body.payload.products).to.be.an("array").to.have.lengthOf(1);
    });
    it("El endpoint PATCH api/carts/:cId debe vaciar su array de productos", async () => {
        const { statusCode, ok, _body } = await requester
            .patch(`/api/carts/${cartCode}`)
        console.log(statusCode, ok, _body);
    });
    it("El endpoint GET api/carts/:cId debe traer al carrito señalado y su array de productos debe estar vacío", async () => {
        const { statusCode, ok, _body } = await requester
            .get(`/api/carts/${cartCode}`)
        console.log(statusCode, ok, _body);
        expect(_body.payload.products).to.be.an("array").to.be.empty;
    });
});