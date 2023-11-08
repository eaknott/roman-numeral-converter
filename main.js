function convertToRoman(num) {
    let str = num.toString();
    const text = [];
    let thousandsPlace = 0;
    let hundredsPlace = 0;
    let tensPlace = 0;
    let onesPlace = 0;

    function getHundredsPlace(digit) {
        const romanHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        return romanHundreds[digit];
    }

    function getTensPlace(digit) {
        const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        return romanTens[digit];
    }

    function getOnesPlace(digit) {
        const romanOnes = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        return romanOnes[digit];
    }

    if (num > 999) {
        thousandsPlace = parseInt(str[0]);
        hundredsPlace = parseInt(str[1]);
        tensPlace = parseInt(str[2]);
        onesPlace = parseInt(str[3]);

        for (let i = 0; i < thousandsPlace; i++) {
            text.push("M");
        }      
        text.push(getHundredsPlace(hundredsPlace));
        text.push(getTensPlace(tensPlace));
        text.push(getOnesPlace(onesPlace));
    } else if (num > 99) {
        hundredsPlace = parseInt(str[0]);
        tensPlace = parseInt(str[1]);
        onesPlace = parseInt(str[2]); 
        
        text.push(getHundredsPlace(hundredsPlace));
        text.push(getTensPlace(tensPlace));
        text.push(getOnesPlace(onesPlace));
    } else if (num > 9) {
        tensPlace = parseInt(str[0]);
        onesPlace = parseInt(str[1]);

        text.push(getTensPlace(tensPlace));
        text.push(getOnesPlace(onesPlace));
    } else {
        onesPlace = parseInt(str[0]);
        
        text.push(getOnesPlace(onesPlace));
    }

    let result = text.join("");
    return result;
}

convertToRoman(36);