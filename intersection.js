//[1,2,3,4,5] U [6,7,1,3,10] = [1,3]

module.exports = function intersection(array1, array2) {
    const result = []
    const alreadyFound = {}
    const toCompare = {}

    for (let j = 0; j < array2.length; j++) {
        const elementOnArray2 = array2[j]
        toCompare[elementOnArray2] = elementOnArray2
    }

    for (let i = 0; i < array1.length; i++) {
        const elementOnArray1 = array1[i];
            if (elementOnArray1 === toCompare[elementOnArray1] && !alreadyFound[elementOnArray1]) {
                alreadyFound[elementOnArray1] = elementOnArray1
                result.push(elementOnArray1)
            }
    }
    
    return result
}