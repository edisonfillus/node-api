import {config} from "./index";

describe('Config', () => {
    it('Should be in test environment',()=>{
        expect(process.env.NODE_ENV).toBe('test')
    })
    it('should have a port', () => {
        expect(config.port).toBeDefined();
    });
    it('should have a api prefix', () => {
        expect(config.api.prefix).toBeDefined();
    });
    it('should have a log level', () => {
        expect(config.logs).toBeDefined();
    });


});