# FORMATO COMMIT

Os commits devem ser escritos com o seguinte formato, onde o *type* é obrigatório e pode ser consultado no próximo tópico e a descrição descreve a ação daquele commit mais detalhadamente:

```<type>: <description>```

# TYPE

O *type* pode ser um desses tipos:

| **Prefixo**  | **Descrição** | **Significado** |
| ------------- | ------------- | ------------- |
| feat | Features | Uma nova funcionalidade |
| fix | Correções de Erros | Uma correção de bug |
| docs | Documentação | Apenas mudanças na documentação |
| style | Estilos | Mudanças em relação a estilização |
| refator | Refatoração de Código | Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade |
| perf | Melhorias de Performance | Uma alteração de código que melhora o desempenho |
| test | Testes | Adição de testes em falta ou correção de testes existentes |
|build | Builds | Mudanças que afetam o sistema de build ou dependências externas (exemplos de escopos: gulp, broccoli, npm) |
| ci | Integrações Contínuas | Alterações em nossos arquivos e scripts de configuração de CI (exemplos de escopos: Travis, Circle, BrowserStack, SauceLabs) |
| chore | Tarefas | Outras mudanças que não modificam arquivos de código-fonte ou de teste |
| revert | Reverter | Reverte um commit anterior |

# Link vídeo projeto youtube

https://www.youtube.com/watch?v=hdQrn18QkdY

# PARA RODAR O PROJETO

rodar em um terminal o comando *npm run dev*