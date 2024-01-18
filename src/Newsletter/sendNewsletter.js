import axios from "axios";

export const sendNewsletter = async (data) => {
    try {
        const response = await axios.post('https://portfolio-backend-production-sanchojralegre.up.railway.app/send-newsletter/', data, {
            headers: {'Authorization': `JWT ${localStorage.getItem('accessToken')}`}
        });
        return response.data;
    } catch (error) {
        console.error("Error sending newsletter", error);
        throw error;
    }
};
