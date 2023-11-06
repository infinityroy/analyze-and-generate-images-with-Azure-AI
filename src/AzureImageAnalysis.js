import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const apiKey = '9a518b0cf51a465a9e72fea9c87b92f3'; // Reemplaza con tu clave de API de Azure
    const endpoint = 'https://azurevisionai.cognitiveservices.azure.com/vision/v3.1/analyze/'; // Reemplaza con la URL de tu instancia

    const params = {
        visualFeatures: 'Description',
        language: 'en',
    };

    const response = await axios.post(endpoint, { url: imageUrl }, {
      params,
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al analizar la imagen:', error);
    return null;
  }
};

export default analyzeImage;