function updateHandling(model, key, value) {
    try {
        const xml = readHandling();
        if (!xml) return false;

        const regex = new RegExp(
            `<Item>\\s*<handlingName>${model.toUpperCase()}</handlingName>[\\s\\S]*?<${key} value="(.*?)" />`,
            'i'
        );

        const updatedXml = xml.replace(regex, (match, oldValue) => {
            console.log(`Изменение ${key} для ${model}: ${oldValue} -> ${value}`);
            return match.replace(oldValue, value);
        });

        return writeHandling(updatedXml);
    } catch (err) {
        console.error('Ошибка изменения handling.meta:', err);
        return false;
    }
}
