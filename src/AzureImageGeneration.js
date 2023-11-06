// azure-image-generation.js

import axios from 'axios';

const apiKey = process.env.AZURE_IMAGEN_GENERATION_API;
const endpoint = process.env.AZURE_IMAGEN_GENERATION_API;

const generateImage = async () => {
  try {
    const prompt = 'Generar imagen de Perro Rojo con ojos Grandes'; // Personaliza según tus necesidades

    const response = await axios.post(endpoint, {
      prompt,
      max_tokens: 50, // Personaliza según tus necesidades
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    return response.data.choices[0].text; // Devuelve el texto de la imagen generada
  } catch (error) {
    console.error('Error al generar la imagen:', error);
    return null;
  }
};

export default generateImage;
