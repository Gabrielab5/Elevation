const {add} = require('./extension')


describe("tests for add", ()=>{

    test("checking push",()=>{
        const pushSpy = jest.spyOn(Array.prototype, 'push')    
        add(1,2)
        expect(pushSpy).toHaveBeenCalled()
        expect(pushSpy).toHaveBeenCalledWith(1,2)
         pushSpy.mockRestore()
    })
})