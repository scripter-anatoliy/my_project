export const required = (value: string) => {
    if (value)
        return undefined
    return "Field is required"
}


export const minLengthCreator = (minLength: string | number) => (value: string) => {
    if (value.length < minLength)
        return `Min length ${minLength} symbols`
    return undefined
}
