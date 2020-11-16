//para testar e validar o comportamento, função assert()
const assert = require('assert');
//importando a minha classe
const Math = require('../src/math')

//descrevendo o meu teste
//primeiro argumento descrição do que estou testando 
//segundo arg. função, que os testes serão escritos
describe('Math class', function(){
    //comportamento esperado pela minha classe
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5, 5), 10)
    })
})
