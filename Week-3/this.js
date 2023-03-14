this.name = 'Priyesh';
function log(age) {
    console.log('Name ', this.name,' with age of ',age);
}

const bindedlog = log.bind(this);

console.log('Normal Execution');
log(27);
console.log('\nBinded Execution');
bindedlog(27);
console.log('\nCall Execution');
log.call(this, 27);
console.log('\nApply Execution');
log.apply(this, [27]);
