let validJson = `{
    "port":     581026179,
    "satisfied": true,
    "depth": [
      false,
      true,
      -922202850.5855799,
      [
        "plus",
        false,
        -1787384375.442697,
        true,
        -440038993,
        true
      ],
      -1070040619,
      -1349192244.4400783
    ],
    "political": false,
    "map": true,
    "mighty": -1608070726.6796255
  }`
  

  
// Function to get the first key of the json string (irregardless of )
function identifyFirstKey(str) {
    // removes \n in string
    let newStr = str.replace(/\n/g, '')
    // index of opening braces
    let indexOfOpeningBraces = newStr.indexOf("{");
    // index of first colon
    let indexOfFirstColon = newStr.indexOf(":");
    // substring from opening braces to colon
    let subString = newStr.substring(indexOfOpeningBraces + 1, indexOfFirstColon)
    // remove spaces in substring
    let firstKey = subString.trim()
    // check for 2 quotations
    if (firstKey.split(`"`).length == 3) {
        // valid key with double quotations
        // remove the quotations
        firstKey = firstKey.replace(/"/g, "")
        return firstKey;
    }
    else if (firstKey.split(`"`).length == 2) {
        // key with single double quotation
        firstKey = firstKey.split(`"`).sort((a, b) => b.length - a.length)[0]
        return firstKey;
    }
    else if (firstKey.split(`"`).length == 1) {
        // key with at least a single quotes
        firstKey = firstKey.replace(/'/g, "")
        return firstKey;
    } else {
        console.log("error with first key")
    }
}


// A value can be a number, string, array, object
function identifyFirstValue(str) {
    // removes \n in string
    let newStr = str.replace(/\n/g, '')
    // index of opening braces
    // let indexOfOpeningBraces = newStr.indexOf("{");
    // index of first colon
    let indexOfFirstColon = newStr.indexOf(":");
    // substring from opening braces to colon
    // let subString = newStr.substring(indexOfOpeningBraces + 1, indexOfFirstColon)
    // remove spaces in substring
    // let firstKey = subString.trim()
    let targetIndex = indexOfFirstColon + 1
    while (newStr[targetIndex] == " ") {
        targetIndex += 1
    }


    // value types

    // arrays

    console.log(targetIndex)
    console.log(newStr[targetIndex])
    return "done"
}

console.log(identifyFirstValue(validJson))


