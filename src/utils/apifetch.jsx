const API_URL = 'http://localhost:3001';

export const sendContactForm = async (formData) => {
    try {
        console.log('Envoi des données:', formData);
        const response = await fetch(`${API_URL}/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de l\'envoi de l\'email.');
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};
