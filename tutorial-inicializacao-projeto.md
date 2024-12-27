# TUTORIAL DE INICIALIZAÇÃO DO PROJETO

**Passo 1**
- Criar repositório no GitHub, para isso acesse o GitHub e clique em New;
- Coloque o nome do repositório;

**Passo 2**
- Vai no terminal e acessa a pasta onde vai estar o projeto, no caso a pasta Pojects dentro do disco local
- Para criarmos a aplicação vamos utiliza a https://vite.dev/;
- No terminal coloque o seguinte comando: ```npm create vite@latest nome_do_repositorio_no_git```
- Ele vai pedir se pode instalar, coloque apenas *y*
- Ele pede para escolher o Framework, selecione a opção *React*
- Em seguida selecione a opção *TypeScript*
- Depois acesse a pasta do projeto e rode o comando ```code .``` para abrir o projeto no Visual Studio Code

**Passo 3**
- Com o projeto aberto no VSCode, abra o terminal do mesmo
- Rode o comando *git init*
- Após isso rode o comando *git add README.md*
- Para fazer o primerio commit rode *git add .*
- Agora vamos commit colocando *git commit -m "mensagem do commit"*
- Agora coloque *git branch -M main*
- Em seguida *git remote add origin (URL que vai ter no git)*
- E por fim coloque *git push -u origin main*

**Passo 4**
- Agora precisamos instalar todas as dependências, então em um terminal de comando rode *npm i*
- Após isso pode startar o projeto, para isso vamos no arquivo *package.json*
- Dentro de ```scripts``` vai ter como você tem que iniciar o projeto
- Então para inicializar o projeto rodamos o comando *npm run (comando que tem no arquivo)*
- Após rodar ele vai lhe dar a porta para acessar o mesmo, basta copiar e abrir no navegador.

**Passo 5**
- Quando o projeto está pronto e precisamos publicar, temos que criar a pasta dist que é o que vai ser publicado
- Para isso acessamos novamente o arquivo *package.json*
- Dentro de ```scripts``` vamos ter a informação de qual comando precisamos rodar para buildar o projeto
- Um exemplo de comando é o *npm run build*
Ao rodar esse comando ele cria a pasta dist que é o que deve ser enviado para a hospedagem.
