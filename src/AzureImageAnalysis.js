import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const apiKey = process.env.AZURE_IMAGEN_ANALISYS_KEY;
    const endpoint = process.env.AZURE_IMAGEN_ANALISYS_API;


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