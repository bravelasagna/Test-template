export default class TeamsController {
  async List() {
    const response = await fetch(
      'https://expresssimplecwxaq7-l0g5--3010.local-credentialless.webcontainer.io/teams',
      { mode: 'no-cors' }
    );
    const data = await response.json();
    return data;
  }
  async GetById(teamId) {
    const response = await fetch(
      'https://mockend.com/bravelasagna/test-template/Teams/' + teamId
    );
    const data = await response.json();
    return data;
  }
}
