export const isConfigured = () => {
    // Verifica que las variables de entorno estén configuradas para Azure Vision y Azure OpenAI
    const apiAzureKey = process.env.AZURE_IMAGEN_GENERATION_API;
    const Azureendpoint = process.env.AZURE_IMAGEN_GENERATION_API;
    const apiOpenAiKey = process.env.AZURE_IMAGEN_ANALISYS_KEY;
    const OpenAiendpoint = process.env.AZURE_IMAGEN_ANALISYS_API;
  
    return apiAzureKey && Azureendpoint && apiOpenAiKey && OpenAiendpoint;
  };