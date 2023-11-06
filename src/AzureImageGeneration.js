// azure-image-generation.js

import axios from 'axios';

const apiKey = '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'; // Reemplaza con tu clave de API de Azure OpenAI
const endpoint = 'https://api.openai.com/v1/images/generations/'; // Reemplaza con tu punto de conexión de Azure OpenAI

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
