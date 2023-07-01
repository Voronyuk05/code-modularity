let formData = {}

export function backFormData(name,email,message) {
    
    formData.name = name
    formData.email = email
    formData.message = message

    return formData;
}