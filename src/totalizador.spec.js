import precioNeto from "./totalizador";

describe("Totalizador", () => {
    it("deberia calcular precio neto de 3 items a precio de 2 = 6", () => {
        expect(precioNeto(3, 2)).toEqual(6);
    });

    it("deberia calcular precio neto de 5 items a precio de 2 = 10", () => {
        expect(precioNeto(5, 2)).toEqual(10);
    });
});