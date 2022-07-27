type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuOpbect = (activemenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activemenu !== '') {
        returnObject[activemenu] = true;
    }

    return returnObject;
}