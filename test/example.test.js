describe("Example test", ()=>{
    it("Should not fail", ()=>{
        expect(1).toBe(1);
    })

    it("Should not fail async", (done)=>{
        setTimeout(()=>{
            expect(1).toBe(1);
            done();
        },2000);

    })
})