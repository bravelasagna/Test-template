export default class TeamsController {
  async List() {
    const response = await fetch(
      'https://mockend.com/bravelasagna/test-template/Teams?limit=5'
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
