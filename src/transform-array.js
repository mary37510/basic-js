 module.exports = function transform(arr) {
         if (Array.isArray(arr) && (arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) {
             if (arr.includes('--discard-next') && arr.indexOf('--discard-next') + 1 >= arr.length) {
                 //удалить элемент с командой и удалить следующий элемент
                 arr.splice(arr.indexOf('--discard-next'), 2);
             } else {
                 //удалить элемент с командой
                 arr.splice(arr.indexOf('--discard-next'), 1);
             }

             if (arr.includes('--discard-prev') && arr.indexOf('--discard-prev') !== 0) {
                 //удалить элемент с командой и удалить предыдущий элемент
                 arr.splice(arr.indexOf('--discard-prev') - 1, 2);
             } else {
                 //удалить элемент с командой
                 arr.splice(arr.indexOf('--discard-prev'), 1);
             }

             if (arr.includes('--double-next') && arr.indexOf('--double-next') + 1 >= arr.length) {
                 //удалить элемент с командой и удвоить следующий элемент
                 arr.splice(arr.indexOf('--double-next'), 1, (arr.indexOf('--double-next') + 1));
             } else {
                 //удалить элемент с командой
                 arr.splice(arr.indexOf('--double-next'), 1);
             }

             if (arr.includes('--double-prev') && arr.indexOf('--double-prev') !== 0) {
                 //удалить элемент с командой и удвоить предыдущий элемент
                 arr.splice(arr.indexOf('--double-prev'), 1, (arr.indexOf('--double-prev') - 1));
             } else {
                 //удалить элемент с командой
                 arr.splice(arr.indexOf('--double-prev'), 1);
             }
             return arr;
         } else if (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev')){
             return arr;
         } else {
             return Error;
         }
 };

