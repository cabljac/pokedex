

const numberToID = (number: number) => {

    number = number + 1;

    const dict1 = ["A", "E", "I", "M", "Q", "U", "Y", "c", "g", "k"];
    const dict2 = ["D", "T", "j", "z"];

    const char1 = dict1[number % 10]

    const char2 = dict2[Math.floor(number / 10) % 4]

    const char4 = number > 100 ? "x" : "w";

    const char3 = (number % 100) < 40 ? "M" : (number % 100) < 80 ? "N" : "O"


    return "UG9rZW1vbjo" + char4 + char3 + char2 + char1 + "=";

}

export default numberToID;