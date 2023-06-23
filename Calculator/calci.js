function appendNumber(num) {
    var result = document.getElementById('result');
    result.value += num;
  }
  
  function appendOperator(operator) {
    var result = document.getElementById('result');
    result.value += operator;
  }
  
  function calculate() {
    var result = document.getElementById('result');
    var expression = result.value;
    var answer = eval(expression);
    result.value = answer;
  }
  
  function clearResult() {
    var result = document.getElementById('result');
    result.value = '';
  }
  