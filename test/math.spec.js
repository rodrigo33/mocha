//para testar e validar o comportamento, função assert()
const assert = require('assert');
//importando a minha classe
const Math = require('../src/math')

//descrevendo o meu teste
//primeiro argumento descrição do que estou testando 
//segundo arg. função, que os testes serão escritos
let value = 0
describe('Math class', function(){    
    //comportamento esperado pela minha classe
    //hooks - formas de executar código e evitar repetição 
    //beforeEach e beforeAfter, garante que antes ou após a execução será modificado o valor
    beforeEach(function() {
        value = 0
    })
    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000)

        value = 5
        
        math.sum(value, 5, value => {
            assert.equal(value, 10)
            done()
        })        
    })
    it('Multiply two numbers', function () {
        const math = new Math();
        //função para testar e validar o comportamento
        assert.equal(math.multiply(value, 5), 0)
    })
})
