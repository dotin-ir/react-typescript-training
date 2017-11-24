
export interface ILocation {
    [key:number]:string;
}

export interface ICity {
    [key:number]:ILocation;
}

export const states : ILocation = {
    "1": 'Fars',
    "2": 'Tehran',
    "3": 'Isfahan',
    "4": 'Yazd',
    "5": 'Azerbaijan Sharghi',
};

export const cities : ICity = {
    "1": {
        "1": 'Jahrom',
        "2": 'Shiraz'
    },
    "2": {
        "1": 'Tehran',
        "2": 'Damavand'
    },
    "3": {
        "1": 'Isfahan',
        "2": 'Najafabad'
    },
    "4": {
        "1": 'Yazd',
        "2": 'Ardakan'
    },
    "5": {
        "1": 'Tabriz',
        "2": 'Miyaneh'
    }
};

