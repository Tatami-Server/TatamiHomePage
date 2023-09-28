import axios from "axios";

const googleForm = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScrfFjwolk-AVfgHLMVatXeJlK1XuzAn8MgF-aVYDl5a4HL2A/formResponse'

export default async function handler({body}, res) {
    const formData = new FormData()
    for(const [key, value] of Object.entries(body)) {
        if(Array.isArray(value) && value.length > 0) {
            formData[key] = []
            value.forEach((elm) => {
                formData.append(key, elm);
            })
        }
        else {
            formData.append(key, value)
        }
    }

    return axios
        .post(googleForm, formData, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        .then(() => {
            res.status(200).json({ message: 'success' })
        })
        .catch((error) => {
            res.status(500).json(error)
        });
};