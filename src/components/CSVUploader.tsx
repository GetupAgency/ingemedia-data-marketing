import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import { parseCSVFile, generateSampleCSVData } from '../utils/csvUtils';
import { CSVImportResult, CSVValidationError } from '../types/analytics';

interface CSVUploaderProps {
  onDataLoaded: (result: CSVImportResult) => void;
  isLoading: boolean;
}

const CSVUploader: React.FC<CSVUploaderProps> = ({ onDataLoaded, isLoading: externalIsLoading }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [errors, setErrors] = useState<Error | CSVValidationError[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(externalIsLoading);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsLoading(externalIsLoading);
  }, [externalIsLoading]);

  // Gérer le téléchargement de fichier
  const handleFileUpload = async (file: File) => {
    console.log("Début du traitement du fichier:", file.name, "taille:", file.size, "type:", file.type);
    setSelectedFileName(file.name);
    setIsLoading(true);
    setErrors(null);
    
    if (!file) {
      console.error("Aucun fichier fourni");
      setIsLoading(false);
      return;
    }

    // Vérifier le type de fichier - accepter plus de types MIME pour CSV
    const isCSV = file.type === 'text/csv' || 
                  file.type === 'application/csv' || 
                  file.type === 'application/vnd.ms-excel' ||
                  file.name.toLowerCase().endsWith('.csv');
    
    if (!isCSV) {
      console.error("Type de fichier invalide:", file.type);
      setErrors([{ row: 0, column: 'file', message: 'Format de fichier non valide. Veuillez télécharger un fichier CSV.' }]);
      setIsLoading(false);
      return;
    }

    try {
      console.log("Lecture du fichier...");
      
      // Créer un reader pour lire le contenu du fichier
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          if (!e.target || typeof e.target.result !== 'string') {
            throw new Error("Échec de la lecture du fichier");
          }
          
          console.log("Contenu du fichier chargé, taille:", e.target.result.length);
          console.log("Premiers caractères:", e.target.result.substring(0, 100));
          
          // Analyser le contenu CSV
          console.log("Appel de parseCSVFile...");
          const result = await parseCSVFile(file);
          console.log("Résultat d'analyse:", result);
          console.log("Données valides:", result.data.length, "erreurs:", result.errors.length);
          
          if (result.errors.length > 0) {
            console.warn("Erreurs détectées:", result.errors);
            setErrors(result.errors);
          } else {
            setErrors(null);
          }
          
          onDataLoaded(result);
          setIsLoading(false);
        } catch (error) {
          console.error("Erreur lors du traitement du contenu du fichier:", error);
          setErrors(error as Error);
          onDataLoaded({ data: [], errors: [], isValid: false });
          setIsLoading(false);
        }
      };
      
      reader.onerror = (error) => {
        console.error("Erreur de lecture du fichier:", error);
        setErrors(new Error("Échec de la lecture du fichier. Veuillez réessayer."));
        onDataLoaded({ data: [], errors: [], isValid: false });
        setIsLoading(false);
      };
      
      // Lire le fichier comme texte
      reader.readAsText(file);
      
    } catch (error) {
      console.error("Exception lors de l'analyse CSV:", error);
      setErrors(error as Error);
      onDataLoaded({ data: [], errors: [], isValid: false });
      setIsLoading(false);
    }
  };

  // Gestionnaire de changement de fichier
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Changement de fichier détecté");
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  // Gestionnaire de clic sur le bouton
  const handleButtonClick = () => {
    console.log("Clic sur le bouton de téléchargement");
    fileInputRef.current?.click();
  };

  // Gestionnaire de glisser-déposer
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Gestionnaire de dépôt de fichier
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    console.log("Fichier déposé");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Télécharger un exemple de fichier CSV
  const downloadSampleCSV = () => {
    console.log("Téléchargement d'un exemple CSV");
    const sampleData = generateSampleCSVData();
    const blob = new Blob([sampleData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'google_analytics_sample.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      <div className="bg-blue-50 p-4 mb-6 rounded-lg text-sm text-blue-800 border border-blue-200">
        <h3 className="font-medium mb-2">Formats supportés:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics 4</li>
          <li>Google Search Console</li>
          <li>Google Analytics Universal</li>
          <li>Autres formats CSV avec des colonnes de chemin/URL et métriques</li>
        </ul>
        <p className="mt-2 text-blue-700">
          <strong>Note:</strong> Les métadonnées (lignes commençant par #) seront automatiquement ignorées.
        </p>
      </div>

      <div
        className={`w-full p-6 border-2 border-dashed rounded-lg text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
        } transition-colors`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".csv,text/csv,application/vnd.ms-excel,application/csv"
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mb-3"></div>
              <p className="text-sm text-gray-600">Analyse du fichier en cours...</p>
              {selectedFileName && (
                <p className="text-xs text-gray-500 mt-1">{selectedFileName}</p>
              )}
            </div>
          ) : (
            <>
              <svg
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Cliquez pour télécharger</span> ou glissez-déposez
              </p>
              <p className="text-xs text-gray-500">Fichier CSV uniquement</p>
              {selectedFileName && (
                <div className="mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {selectedFileName} <span className="ml-1">✓</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap mt-4 gap-2">
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Analyse en cours...' : 'Importer un fichier CSV'}
        </button>
        <button
          type="button"
          onClick={downloadSampleCSV}
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Télécharger un exemple
        </button>
      </div>

      {/* Affichage des erreurs */}
      {errors && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <h3 className="text-sm font-medium text-red-800 mb-2">Erreurs de validation:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-red-700">
            {errors instanceof Error ? (
              <li>{errors.message}</li>
            ) : (
              errors.map((error, index) => (
                <li key={index}>
                  {error.row > 0 ? `Ligne ${error.row}, ` : ''}
                  {error.column !== 'global' ? `Colonne "${error.column}": ` : ''}
                  {error.message}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CSVUploader; 