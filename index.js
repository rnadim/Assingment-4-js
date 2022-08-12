// Solution Problem - 1
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Enter number type value.';
    }
    const degree = radian * (180 / Math.PI);
    const roundFigure = degree.toFixed(2);

    return roundFigure;
}

// Solution Problem - 2
function isJavaScriptFile(str) {
    if (typeof str !== 'string') {
        return 'Enter string type value.';
    }
    if (str.endsWith('.js') == true) {
        return true;
    } else {
        return false;
    }
}

// solution Problem - 3
function oilPrice(p1, p2, p3) {
    if (
        typeof p1 !== 'number' ||
        typeof p2 !== 'number' ||
        typeof p3 !== 'number'
    ) {
        return 'Enter valid number value.';
    }
    const dieselPrice = 114 * p1;
    const petrolPrice = 130 * p2;
    const octanPrice = 135 * p3;
    const total = dieselPrice + petrolPrice + octanPrice;
    return total;
}

// Solution Problem - 4

function publicBusFare(members) {
    if (typeof members !== 'number') {
        return 'Enter valid number value.';
    }
    const afterBus = members % 50;
    const afterMicroBus = afterBus % 11;
    const afterPublicBus = afterMicroBus * 250;
    return afterPublicBus;
}

// Solution Problem - 5
function isBestFriend(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return 'Enter valid object value.';
    }
    if (obj1.name == obj2.friend && obj1.friend == obj2.name) {
        return true;
    } else {
        return false;
    }
}

