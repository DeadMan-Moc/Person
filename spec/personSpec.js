describe("Person", () => {
    it("should show person's details", () => {
        let person = new Person ('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']);
        let greeting = person.hello();
        expect(greeting).toBe(`Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse,agile and ssd hard drives`)
    });
})