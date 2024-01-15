# Crud Clientes

Primeiro de tudo, terá que instalar as bibliotecas do package.json do projeto, nisso deverá ter pelo menos a versão 18.15.0 do NodeJs, para dar o comando de npm install. Logo após instalar as bibliotecas, você terá que ter instalado o Angular, se não tiver é so executar esse comando, npm install -g @angular/cli@16.2.11 para instalar a mesma versão do projeto, logo após instalar, no projeto para abrir a aplicação, deverá executar o comando ng serve para abrir em localhost, nisso no navegador, deverá acessar a url localhost:4200 para ver o sistema.

O sistema se inicia com uma tela de login, onde utilizei técnicas de CSS para criar uma interface responsiva e atraente. A logo, elaborada no Canva, foi integrada usando comandos de canvas. O usuário e senha são inicialmente configurados para acesso livre, mas em um ambiente com backend, apenas usuários cadastrados teriam permissão.

Ao efetuar o login, o sistema apresenta uma interface de listagem de clientes, implementada com a biblioteca de componentes de UI de código aberto, o PrimeNG. Nessa listagem, pode-se perceber que tenho botões de adicionar, editar e excluir, essas funcionalidades também foi feita usando essa biblioteca. Essa escolha foi feita devido á sua capacidade de aprimorar a experiência do usuário(UX) e devido ao meu conhecimento e utilização no meu dia a dia. Para complementar, integrei o PrimeFlex, uma biblioteca de utilitários de CSS, para garantir responsividade e melhorar a usabilidade dos componentes PrimeNG.

Além disso, desenvolvi as mesmas funcionalidades acima, utilizando o HTML e CSS "puro", e claro que responsivo támbem. Para ver essas funcionalidas, deve-se acessar o botão menu no header, e clicar em Home para abrir essa listagem contendo as funcionalidades de criar, editar e excluir, mas que utilizei o mesmo componente de excluir para os dois. Esta abordagem foi adotada com base nos conhecimentos e experiências acumuladas até o momento. A decisão de não mencionar explicitamente bibliotecas de CSS no teste foi superada pela necessidade de priorizar a experiência do usuário, na qual o PrimeNG representa um papel importante nisso.

Embora o projeto não apresenta um backend, a estrutura delineada destina-se a oferecer uma visão geral das capacidades do sistema, focando na interação intuitiva do usuário. Mas percebe-se que os dados foram todos setados na mão no serviço de cliente. Se utilizasse um backend, era só ajustar alguns detalhes e chamar a URL do backend.

No projeto podemos perceber que ele se destaca com a sua versatilidade das ferramentas escolhidas para criar uma experiência rica para o usuário final.

# Versão Angular - v16.2.11
# Versão NodeJS - v18.15.0
# Versão PrimeNG - v16.9.1
# Versão PrimeFlex - v3.3.1
