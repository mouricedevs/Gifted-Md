/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
module.exports = { dBinary, eBinary }
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
/* 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝟱 */
