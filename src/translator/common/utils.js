function translateObject(object, translations) {
    return Object.keys(object).reduce((acc, key) => {
        const translatedKey = translations[key] || key;
        acc[translatedKey] = object[key];
        return acc;
    }, {});
}

module.exports = {
    translateObject
}