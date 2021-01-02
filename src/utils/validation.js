import validator from 'validator';

export const validators = {
    email: {
        required: (value) => { return value === '' },
        isEmail: (value) => { return !validator.isEmail(value) }
    },
    password: {
        required: (value) => { return value === '' },
        minLength: (value) => { return value.length < 8 }
    },
    userName: {
        required: (value) => { return value === '' }
    },
}

export const validation = (name, value) => Object.keys(validators[name]).map(key => {
    const result = validators[name][key](value);
    return { [key]: result };
}).reduce((acc, curr) => {
    return { ...acc, ...curr }
});




