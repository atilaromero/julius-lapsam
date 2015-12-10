#Descrição
Este projeto usa o Docker para automatizar a instalação do Coruja no Linux, facilitando a realização de testes com a ferramenta.

##Coruja
O Coruja é um "Software para reconhecimento de voz em Português Brasileiro":http://www.laps.ufpa.br/falabrasil/downloads.php

##Julius
O Julius é um "high-performance, small-footprint large vocabulary continuous speech recognition (LVCSR) decoder software for speech-related researchers and developers.":https://github.com/julius-speech/julius

#Para testar no Linux:
1. Instale o docker: http://docs.docker.com/engine/installation/
2. Instale o docker-compose: https://docs.docker.com/compose/install/
3. Vá para o diretório raiz do projeto (onde estão o README.md, o arquivo Dockerfile e o arquivo teste.wav)
3. Teste o exemplo:
```
cat teste.wav | docker-compose run --rm julius 
```

#Para criar no Linux um servidor HTTP simples que recebe um arquivo de áudio e retorna o texto reconhecido:
1. Instale o docker e o docker-compose
2. Instale o node.js e o npm: https://docs.npmjs.com/getting-started/installing-node
3. Vá para o diretório raiz do projeto
4. Prepare o npm:
  ```
  npm up
  ```
5. Rode o servidor (vai usar a porta 8081):
  ```
  node index.js
  ```
