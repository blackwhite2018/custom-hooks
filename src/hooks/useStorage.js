import { useState, useEffect } from 'react';

const useStorage = (Storage, key, isJsonify = false) => {
    const [value, setValue] = useState(
        isJsonify ? JSON.stringify(Storage.getItem(key)) : Storage.getItem(key)
    );

    if (value === null) {
        setValue('');
    }

    useEffect(() => {
        if (value === null) {
            Storage.removeItem(key);
            return;
        }
        Storage.setItem(key, isJsonify ? JSON.stringify(value) : value);
    }, [key, isJsonify, Storage, value]);

    return [value, setValue];
};

export default useStorage;

