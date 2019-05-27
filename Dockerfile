FROM motemen/julius

ENV LC_ALL C.UTF-8

WORKDIR /julius-4.3.1
RUN sed -ie 's/#define MAXSEQNUM     150/#define MAXSEQNUM     15000/' /julius-4.3.1/libsent/include/sent/speech.h
RUN make clean; ./configure --enable-words-int; make install

RUN apt-get install -y sox p7zip-full && apt-get clean

WORKDIR /
COPY coruja_jlapsapi-1.7.+.zip .
RUN  ls -l coruja_jlapsapi-1.7.+.zip
RUN  echo "b552143685a61940f73f96185b3268c6  coruja_jlapsapi-1.7.+.zip" | md5sum -c - || curl -o coruja_jlapsapi-1.7.+.zip https://media.githubusercontent.com/media/setecrs/julius-lapsam/master/coruja_jlapsapi-1.7.%2B.zip
RUN  echo "b552143685a61940f73f96185b3268c6  coruja_jlapsapi-1.7.+.zip" | md5sum -c -
RUN  7z x coruja_jlapsapi-1.7.+.zip
COPY ./julius.jconf.patch /tmp/
RUN  patch /coruja_jlapsapi/julius.jconf < /tmp/julius.jconf.patch

WORKDIR /coruja_jlapsapi/
CMD sox - -r 16000 -e signed -b 16 -c 1 -t .wav - | julius -C julius.jconf -nolog -quiet #-progout 
