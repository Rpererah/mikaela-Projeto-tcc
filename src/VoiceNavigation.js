import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceNavigation = () => {
    const history=useNavigate();
    const { transcript,listening, resetTranscript } = useSpeechRecognition();


    const handleToggleListening = () => {
        if (listening) {
          SpeechRecognition.stopListening();
          handleVoiceCommand();
        } else {
          SpeechRecognition.startListening();
        }
      };


  const handleVoiceCommand = () => {
    console.log(transcript)
    // Implemente lógica para analisar a transcrição e navegar para a página desejada
    if (transcript.toLowerCase().includes('teste')) {
        console.log('funcionou')
      // Substitua 'ir para página inicial' pelo comando que você deseja reconhecer
      history('/'); // Ou use o React Router para navegação programática
    }
    if(transcript.toLocaleLowerCase().includes('teste 2')){
        console.log('funcionou denv')
        history('/outra-pagina');
    }
    // Adicione mais comandos conforme necessário
  };

  return (
    <div>
      <p>{transcript}</p>
      <button onClick={handleToggleListening}>
        {listening ? 'Parar escuta' : 'Iniciar escuta'}
      </button>
      <button onClick={() => { resetTranscript(); }}>Limpar transcrição</button>
    </div>
  );
};

export default VoiceNavigation;

