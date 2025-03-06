function Solve(val) {
    var v = document.getElementById('res');
 
    // Prevent multiple decimal points in the same number
    if (val === '.' && v.value.slice(-1) === '.') return;
 
    // Prevent multiple consecutive operators
    if ('+-*/%'.includes(val) && '+-*/%'.includes(v.value.slice(-1))) return;
 
    v.value += val;
 }
 
 function Result() {
    var num1 = document.getElementById('res').value;
 
    try {
        // Replace "x" with "*" for multiplication
        num1 = num1.replace(/x/g, '*');
 
        // Handle percentage calculation: Convert "50%" -> "50/100"
        num1 = num1.replace(/(\d+)%/g, "($1/100)");
 
        // Prevent eval() from running unsafe expressions
        if (/[^0-9+\-*/().%]/.test(num1)) throw "Invalid Input";
 
        var num2 = eval(num1);
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
 }
 
 function Clear() {
    document.getElementById('res').value = '';
 }
 
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
 
 // Handle keyboard input
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
 
    if (validKeys.includes(key)) {
        Solve(key);
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key === 'Escape') {
        Clear();
    }
 });
 