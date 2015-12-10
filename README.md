#Para testar no Linux:
1. Instale o docker: http://docs.docker.com/engine/installation/
2. Instale o docker-compose: https://docs.docker.com/compose/install/
3. Vá para o diretório raiz do projeto (onde estão o README.md, o arquivo Dockerfile e o arquivo teste.wav)
3. Teste o exemplo:
```
cat teste.wav | docker-compose run --rm julius 
```

#Para criar um servidor simples que recebe um arquivo e retorna o texto reconhecido:
1. Instale o node.js
2. Vá para o diretório raiz do projeto
3. Prepare o npm:
  ```
  npm up
  ```
4. Rode o servidor (vai usar a porta 8081):
  ```
  node index.js
  ```
