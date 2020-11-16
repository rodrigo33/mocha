//para testar e validar o comportamento, função assert()
const assert = require('assert');
//importando a minha classe
const Math = require('../src/math')

//descrevendo o meu teste
//primeiro argumento descrição do que estou testando 
//segundo arg. função, que os testes serão escritos
describe('Math class', function(){
    //comportamento esperado pela minha classe
    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000)
        
        math.sum(5, 5, value => {
            assert.equal(value, 10)
            done()
        })        
    })
    it.only('Multiply two numbers', function () {
        const math = new Math();
        //função para testar e validar o comportamento
        assert.equal(math.multiply(5,5), 25)
    })
})
