# Descrição
Este projeto usa o Docker para automatizar a instalação do Julius usando o LaPSAM no Linux, facilitando a realização de testes de reconhecimento de fala em pt-BR.

## Para testar no Linux
```
cat teste.wav | docker run --rm -i setecrs/julius-lapsam
```

## Julius
O Julius é um *"high-performance, small-footprint large vocabulary continuous speech recognition (LVCSR) decoder software for speech-related researchers and developers."*:https://github.com/julius-speech/julius

## LaPSAM
O LaPSAM é um *"modelo acústico criado com o software HTK"*: http://labvis.ufpa.br/falabrasil/downloads/

Foi utilizado o LaPSAM do Coruja para Java: http://labvis.ufpa.br/falabrasil/downloads/

O Coruja é um *"software para reconhecimento de voz em Português Brasileiro, composto por uma API desenvolvida em C++ com suporte a CLR (Common Language Runtime) para controle em tempo-real do decodificador Julius e um modelo acústico (LaPSAM 1.5) construído com a ferramenta HTK"*: http://labvis.ufpa.br/falabrasil/downloads/

