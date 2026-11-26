# Onboarding DBVO

Plataforma da jornada do colaborador do Grupo DBVO: recrutamento e seleção, guia de onboarding, formulários de experiência (45 e 90 dias) e desligamento, links úteis e a **agenda de onboarding** de cada pessoa.

- Endereço (GitHub Pages): https://pdedbvo.github.io/onboarding/
- Agenda: https://pdedbvo.github.io/onboarding/#agenda (teste sem login: `?demo#agenda`, ou `?demo=lider#agenda`)
- Fica fora do SharePoint: a Central de ferramentas só tem um link para cá.

## Arquivos
- `index.html`: layout e funcionamento (fonte N27 embutida).
- `dados.js`: todo o conteúdo (etapas, R&S, guia, links dos Forms, links úteis) e a configuração do Firebase.

## Publicar
Settings → Pages → branch `main`, pasta `/root`.

## Agenda: perfis e acessos (Firebase sharepoint-studio)
- **Administrador**: vê todas as agendas e cadastra pessoas na aba **Acessos**. Quem está em `editores` (Estúdio) já entra como Administrador.
- **RH**: vê e edita todas as agendas, pode excluir.
- **Líder**: vê e edita só as agendas em que é o líder (o e-mail dele).
- Cadastro: aba Acessos → nome, e-mail da empresa, perfil e senha inicial (opcional). A pessoa troca a senha no botão "Trocar senha". Para o login ser criado pelo app, ligue em Authentication → Configurações → Ações do usuário → "Ativar criação (inscrição)". Com senha, o login é criado na hora; é o mesmo e-mail que a pessoa usa para entrar. Grava em `acessosOnboarding/{email}`.
- Ao criar uma agenda, o líder é escolhido numa lista das pessoas cadastradas.

### Regras do Firestore (cole o arquivo inteiro e publique)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    function logado() { return request.auth != null && request.auth.token.email != null; }
    function dono()   { return logado() && request.auth.token.email == 'sergio.f@edificabpo.com.br'; }
    function cad()    { return /databases/$(db)/documents/editores/$(request.auth.token.email); }
    function editor() { return dono() || (logado() && exists(cad())); }
    function admin()  { return dono() || (logado() && exists(cad()) && get(cad()).data.papel == 'Administrador'); }

    match /conteudo/{doc}   { allow read: if true;     allow write: if editor(); }
    match /editores/{email} { allow read: if editor(); allow write: if admin(); }

    // ---------- Onboarding: Administrador, RH e Líder ----------
    function acOnb()    { return /databases/$(db)/documents/acessosOnboarding/$(request.auth.token.email); }
    function temOnb()   { return logado() && exists(acOnb()); }
    function papelOnb() { return get(acOnb()).data.papel; }
    function onbAdmin() { return editor() || (temOnb() && papelOnb() == 'Administrador'); }
    function onbRH()    { return onbAdmin() || (temOnb() && papelOnb() == 'RH'); }

    match /onboarding/{id} {
      allow read, update: if onbRH() || (temOnb() && resource.data.liderEmail == request.auth.token.email);
      allow create: if onbRH() || (temOnb() && request.resource.data.liderEmail == request.auth.token.email);
      allow delete: if onbRH();
    }
    match /acessosOnboarding/{email} {
      allow read: if logado() && (request.auth.token.email == email || onbRH());
      allow write: if onbAdmin();
    }
  }
}
```
