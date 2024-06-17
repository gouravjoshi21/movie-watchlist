export function browserId() {
    // Check if there's already a browser ID in local storage
    let id = localStorage.getItem('browserId')

    // If not, generate a new one
    if (!id) {
        // Function to generate a random string of 8 characters (numbers and letters)
        const generateId = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let result = ''
            for (let i = 0; i < 8; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length))
            }
            return result
        }

        // Generate the ID and save it in local storage
        id = generateId()
        localStorage.setItem('browserId', id)
    }

    // Return the browser ID
    return id
}
