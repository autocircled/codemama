const input = "#DFA456"
const data = input.trim()
// we need to check if data is not empty
if (data) {
    // console.log(data)
    // we need to check if data starts with # and not more than one #
    if (data.startsWith("#") && data.lastIndexOf("#") === 0) {
        const code = data.slice(1)
        if (code.length === 6) {
            // we need to check if the code is only A to F, alphabets and numbers
            if (/^[A-Fa-f0-9]+$/.test(code)) {
                console.log("true")
            } else {
                console.log("false")
            }
        } else {
            console.log("false")
        }
    } else {
        console.log("false")
    }
}else{
    console.log("false")
}