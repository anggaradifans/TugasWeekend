//Soal 1
function ABbCccDddd(huruf) {

    var duplikat = ''
    for (var i = 0; i < huruf.length; i++) {
        for (var j = 0; j < 1; j++) {
            duplikat += huruf[i].toUpperCase()
        }
        for (var k = 0; k < i; k++) {
            duplikat += huruf[i].toLowerCase()
        }
        duplikat += '-'
    }
    var hasil = duplikat.substring(0, duplikat.length - 1)
    return hasil
}
console.log(ABbCccDddd('fghi'))

//Soal 2

function duplikatFilter(a,b){
    return a.filter(b)
}
arr = [4,3,2,1,5] 
console.log(duplikatFilter(arr,function(val){return val !== 2}))


//Soal 3
function sortDup(a,b){
    return a.sort(b)
}
array = [1,4,5,2,34,4,5,1,3,11]
console.log(sortDup(array,function(c,b){return c-b}))
