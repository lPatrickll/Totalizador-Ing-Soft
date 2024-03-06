import {precioNeto, calcularTotal, calcularDescuento, categoriaImpuesto} from "./totalizador";

describe("Totalizador", () => {
    it("deberia calcular precio neto de 3 items a precio de 2 = 6", () => {
        expect(precioNeto(3, 2)).toEqual(6);
    });

    it("deberia calcular precio neto de 5 items a precio de 2 = 10", () => {
        expect(precioNeto(5, 2)).toEqual(10);
    });

    it("deberia calcular el precio total con el estado CA", () => {
        let estado = "CA";
        let cantidad = 20;
        let precio = 5;
        expect(calcularTotal(cantidad, precio, estado)).toEqual(108.25);
    });

    it("deberia calcular el precio total con el estado AL", () => {
        let estado = "AL";
        let cantidad = 20;
        let precio = 5;
        expect(calcularTotal(cantidad, precio, estado)).toEqual(104);
    });

    it("deberia calcular el precio total con el estado TX", () => {
        let estado = "TX";
        let cantidad = 20;
        let precio = 5;
        expect(calcularTotal(cantidad, precio, estado)).toEqual(106.25);
    });

    it("deberia calcular el precio total con el estado NV", () => {
        let estado = "NV";
        let cantidad = 20;
        let precio = 5;
        expect(calcularTotal(cantidad, precio, estado)).toEqual(108);
    });

    it("deberia calcular el precio total con el estado UT", () => {
        let estado = "UT";
        let cantidad = 20;
        let precio = 5;
        expect(calcularTotal(cantidad, precio, estado)).toEqual(106.65);
    });
    
    it("deberia hacer un descuento al precio neto de acuerdo a la cantidad", () => {
        let neto = precioNeto(1000, 5);
        expect(calcularDescuento(neto, 1000)).toEqual(150);
    });

    it("deberia hacer un descuento al precio neto de acuerdo a la cantidad > 3000", () => {
        let neto = precioNeto(3000, 5);
        expect(calcularDescuento(neto, 3000)).toEqual(750);
    });

    it("deberia hacer un descuento al precio neto de acuerdo a la cantidad > 7000", () => {
        let neto = precioNeto(7000, 5);
        expect(calcularDescuento(neto,7000)).toEqual(2450);
    });

    it("deberia hacer un descuento al precio neto de acuerdo a la cantidad > 10000", () => {
        let neto = precioNeto(10000, 2);
        expect(calcularDescuento(neto,10000)).toEqual(2000);
    });

    it("deberia hacer un descuento al precio neto de acuerdo a la cantidad > 30000", () => {
        let neto = precioNeto(30000, 2);
        expect(calcularDescuento(neto,30000)).toEqual(9000);
    });

    it("deberia calcular el precio total con el estado CA", () => {
        let estado = "CA";
        let cantidad = 7000;
        let precio = 5;
        expect(calcularTotal(cantidad, precio, estado)).toEqual(35437.5);
    });

    it("Aumenta el precio de acuerdo a la categoria varios + 0%", () => {
        let neto = precioNeto(1000, 2);
        expect(categoriaImpuesto(neto, "varios")).toEqual(0);
    });

    it("Impuesto de acuerdo a la categoria alimentos + 0%", () => {
        let neto = precioNeto(1000, 2);
        expect(categoriaImpuesto(neto, "alimentos")).toEqual(0);
    });

    it("Impuesto de acuerdo a la categoria bebidas alcoholicas + 7%", () => {
        let neto = precioNeto(1000, 2);
        expect(categoriaImpuesto(neto, "bebidas")).toEqual(140);
    });

    it("Impuesto de acuerdo a la categoria material de escritorio + 0%", () => {
        let neto = precioNeto(1000, 2);
        expect(categoriaImpuesto(neto, "material")).toEqual(0);
    });
});