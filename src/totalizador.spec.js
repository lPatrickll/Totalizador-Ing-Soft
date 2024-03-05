import {precioNeto, calcularTotal} from "./totalizador";

describe("Totalizador", () => {
    it("deberia calcular precio neto de 3 items a precio de 2 = 6", () => {
        expect(precioNeto(3, 2)).toEqual(6);
    });

    it("deberia calcular precio neto de 5 items a precio de 2 = 10", () => {
        expect(precioNeto(5, 2)).toEqual(10);
    });

    it("deberia calcular el precio total con el estado CA", () => {
        let estado = "CA";
        let neto = precioNeto(20, 5);
        expect(calcularTotal(neto, estado)).toEqual(108.25);
    });

    it("deberia calcular el precio total con el estado AL", () => {
        let estado = "AL";
        let neto = precioNeto(20, 5);
        expect(calcularTotal(neto, estado)).toEqual(104);
    });

    it("deberia calcular el precio total con el estado TX", () => {
        let estado = "TX";
        let neto = precioNeto(20, 5);
        expect(calcularTotal(neto, estado)).toEqual(106.25);
    });

    it("deberia calcular el precio total con el estado NV", () => {
        let estado = "NV";
        let neto = precioNeto(20, 5);
        expect(calcularTotal(neto, estado)).toEqual(108);
    });

    it("deberia calcular el precio total con el estado UT", () => {
        let estado = "UT";
        let neto = precioNeto(20, 5);
        expect(calcularTotal(neto, estado)).toEqual(106.65);
    });
    
    it("deberia hacer un descuento al precio neto de acuerdo a la cantidad", () => {
        let neto = precioNeto(1000, 5);
        expect(calcularDescuento(neto, 1000)).toEqual(150);
    });
});

function calcularDescuento(neto, cantidad){
    return neto * 0.03;
}