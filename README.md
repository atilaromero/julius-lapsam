#Descrição
Este projeto usa o Docker para automatizar a instalação do Julius usando o LaPSAM no Linux, facilitando a realização de testes de reconhecimento de fala em pt-BR.

##Julius
O Julius é um "high-performance, small-footprint large vocabulary continuous speech recognition (LVCSR) decoder software for speech-related researchers and developers.":https://github.com/julius-speech/julius

##LaPSAM
O LaPSAM é um "modelo acústico criado com o software HTK": http://www.laps.ufpa.br/falabrasil/downloads.php

#Para testar no Linux:
- Instale o docker: http://docs.docker.com/engine/installation/
```
curl -s https://get.docker.com/ | sudo sh
```
- Instale o docker-compose: https://docs.docker.com/compose/install/
```
curl -L https://github.com/docker/compose/releases/download/1.5.2/docker-compose-`uname -s`-`uname -m` > /usr/bin/docker-compose
chmod a+x /usr/bin/docker-compose
```
- Vá para o diretório raiz do projeto (onde estão o README.md, o arquivo Dockerfile e o arquivo teste.wav)
- Teste o exemplo:
```
cat teste.wav | docker-compose run --rm julius 
```

#Para criar no Linux um servidor HTTP simples que recebe um arquivo de áudio e retorna o texto reconhecido:
- Instale o docker e o docker-compose
- Instale o node.js e o npm: https://docs.npmjs.com/getting-started/installing-node
- Vá para o diretório raiz do projeto
- Prepare o npm:
```
npm up
```
- Rode o servidor (vai usar a porta 8081):
```
node index.js
```

#Para testar no Windows ou no Linux via VM:
- Instale o VirtualBox ou VMWare
- Instale o Vagrant: https://docs.vagrantup.com/v2/installation/
- Vá para o diretório raiz do projeto (onde estão o README.md, o arquivo Dockerfile e o arquivo teste.wav)
- Rode a VM:
```
vagrant up
```
