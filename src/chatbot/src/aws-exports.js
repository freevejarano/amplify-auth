const awsmobile = {
    // Configuraciones de Amplify
    API: {
      endpoints: [
        {
          name: "chatbotAPI",
          endpoint: "https://boybeh6525.execute-api.us-east-1.amazonaws.com/prod/",  // Cambia por tu API Gateway
          region: "us-east-1",
        },
      ],
    },
  };
  
  export default awsmobile;
  