let {request, maLogger, expect} = require('../globalConfig');

describe('POSTMAN ECHO TEST SUITE', function()  
{    
    it('Test for GET', async function() {

        let response = await request
                            .get('get?foo1=bar1&foo2=bar2');

        //report & logging
        maLogger(this, {title: 'Expected result', value: "https://postman-echo.com/get?foo1=bar1&foo2=bar2"});
        
        //validation
        expect(response.statusCode).to.equal(200);
        expect(response.res.statusMessage).to.equal('OK');
        expect(response.body.url).to.equal('https://postman-echo.com/get?foo1=bar1&foo2=bar2');
    });

    it('Test for POST', async function() {

        let response = await request
                            .post('post')                            
                            .send("This is expected to be sent back as part of response body");

        //report & logging
        maLogger(this, {title: 'Expected result', value: "https://postman-echo.com/post"});
        
        //validation
        expect(response.statusCode).to.equal(200);
        expect(response.res.statusMessage).to.equal('OK');
        expect(response.body.url).to.equal('https://postman-echo.com/post');    
    });


});


