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

## Agenda: banco e acessos (Firebase sharepoint-studio)
- Coleção `onboarding`: uma ficha por contratação (nome, cargo, setor, líder, liderEmail, aceite, inicio, itens{id:{ok,data,reg}}).
- Quem está em `editores/{email}` (Estúdio) entra como RH e vê tudo.
- Outros: criar usuário no Firebase Auth (e-mail/senha) e o doc `acessosOnboarding/{email em minúsculas}` com `papel: "RH"` (ex.: Carol) ou `papel: "Lider"`. Líder vê e cria só agendas com o próprio e-mail em `liderEmail`.

### Regras a acrescentar no console (Firestore → Regras), dentro de `match /databases/{database}/documents`
```
function ehEditor() { return request.auth != null && exists(/databases/$(database)/documents/editores/$(request.auth.token.email)); }
function papelOnb() { return get(/databases/$(database)/documents/acessosOnboarding/$(request.auth.token.email)).data.papel; }
function temOnb() { return request.auth != null && exists(/databases/$(database)/documents/acessosOnboarding/$(request.auth.token.email)); }
function ehRH() { return ehEditor() || (temOnb() && papelOnb() == "RH"); }
match /onboarding/{id} {
  allow read, update: if ehRH() || (temOnb() && resource.data.liderEmail == request.auth.token.email);
  allow create: if ehRH() || (temOnb() && request.resource.data.liderEmail == request.auth.token.email);
  allow delete: if ehRH();
}
match /acessosOnboarding/{email} {
  allow read: if request.auth != null && (request.auth.token.email == email || ehRH());
  allow write: if ehEditor();
}
```
