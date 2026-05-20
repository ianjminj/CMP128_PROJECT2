let val = '0';
let stored = '';
let sym = null; //I used sym to store the operator//
let fresh = false;  //false means that the number is added onto. True means a new number chain is started//

function refresh() {
  document.getElementById('display').value = val;
}

function press(n) {
  if (fresh) { val = n; fresh = false; }
  else val = val === '0' ? n : val + n;
  refresh();
}  //BASICALLY I USED VAL TO hold the number that is currently on display.
//If fresh is true then the number on display is replaced with n
//If fresh is false then the number on display is val +n, val is the number on display btw//
//qUESTION MARK BASICALLY SAYS IF VAL=0 THEN REPLACE IT WITH N, IF NOT ADD IT N ONTO THE VAL
//So basically, if fresh=false then val+n, if fresh is true then store val and val=n.
function dot() { 
  if (!val.includes('.')) val += '.';
  refresh();
}   //basically just prevents numbers from having dots like 3....5//
//refresh updates the page for new numbers

function pick(s) { 
  stored = val; //stored basically stores the number values aka "val"
  sym = s;   //sym stores the operation
  val = s;   //display the operator on the display
  fresh = true;  //fresh starts a new number so 5+3=8 and not 53, lol.
  refresh();
} //pick basically serves as a multifunctions, storing, freshing, etc everytime a button is pressed. It saves everything for run()//

function run() {
    //if nothing, then don't calculate
  if (!sym || !stored) return;
  //x and ys basically define what numbers to use for the operation.
  let x = +stored; //first stored val
  let y = +val;  //second val
  let out; //result

  switch (sym) {
    //the functions for operations//
    case '+': out = x + y; break;
    case '-': out = x - y; break;
    case '*': out = x * y; break;  //the break stops the run() function from running every case after finding the correct operator
    case '/': out = y !== 0 ? x / y : 'Error'; break;   //prevents dividing by zero
  }

  val = String(+out.toFixed(10));  //I made this to fix floating errors like 3.50000000, so if i add numbers with zeroes like 0.03.
  sym = null;
  stored = '';
  fresh = true;
  refresh();
}

function wipe() {   //RESETS EvERYTHING. BASICALLY THE CLEAR BUTTOn sets val to 0, clears the storage, resets the others.
  val = '0';
  stored = '';
  sym = null;
  fresh = false;
  refresh();
}