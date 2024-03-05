describe("Totalizador", () => {
    it("deberia calcular precio neto de 3 items a precio de 2 = 6", () => {
        expect(precioNeto(3, 2)).toEqual(6);
    });
});

function precioNeto(cantItems, precio){
    return 6;
}