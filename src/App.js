import React, { useState } from 'react';
import './App.css'; 
import analyzeImage from './AzureImageAnalysis'; // Reemplaza con la ruta correcta
import generateImage from './AzureImageGeneration'; // Reemplaza con la ruta correcta



function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [, setGeneratedImage] = useState('');


  const handleImageAnalysis = async () => {
    try {
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      setAnalysisResult(null);
    }
  };

  const handleImageGeneration = async () => {
    const generatedText = await generateImage(); // Llama a la función

    if (generatedText) {
      setGeneratedImage(generatedText);
    }
  };

  const DisplayResults = () => {
    if (analysisResult) {
      return (
        <div>
          <h2>Analysis Results:</h2>
          <p>Image URL: {imageUrl}</p>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Image Analyzer and Generator</h1>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />
      <button onClick={handleImageAnalysis}>Analyze Image</button>
      <button onClick={handleImageGeneration}>Generate Image</button>
      <DisplayResults /> {/* Mostrar los resultados de la llamada API */}
    </div>
  );
}



export default App;