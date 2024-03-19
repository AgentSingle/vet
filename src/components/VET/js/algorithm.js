export const debounce = (func, wait) => {
    let timeout;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}


// ARRAY MODIFICATION
// const modifiedArray = modifyObjectById(array, 3, "SL", 24);
export const modifyObjectById = async (array, id, key, value) =>{
    // Find the object with the specified ID
    const foundObject = array.find(obj => obj.id === id);

    // Check if object with ID is found
    if (foundObject) {
        // Update the property value based on key name
        foundObject[key] = value;
    }

    // Return the modified object or null if not found
    return foundObject;
}

// Function to add or replace object in array based on ID
export const addOrReplaceObject = async (array, newObject) =>{
    // Find index of object with same ID if it exists
    const index = array.findIndex(obj => obj.id === newObject.id);

    // If object with same ID exists, replace it; otherwise, add new object
    if (index !== -1) {
        array[index] = newObject; // Replace existing object
    } else {
        array.push(newObject); // Add new object to array
    }

    // Return the updated array
    return array;
}