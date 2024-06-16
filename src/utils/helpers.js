export function ucfirst(str) {
    // Check if the string is empty
    if (str.length === 0) {
        return str
    }
    // Convert the first character to uppercase and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1)
}
