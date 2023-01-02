import ApiUtils from '../utils/apiUtils';

export default class TeamsController {
  apiUtils = new ApiUtils();

  async List() {
    const response = await fetch(
      'https://api.jsonbin.io/v3/b/63b2eb5801a72b59f23e89b6/',
      {
        headers: this.apiUtils.adjustApiHeadersForJsonBin(''),
      }
    );
    const data = await response.json();
    return data;
  }
  async GetById(teamId) {
    const response = await fetch(
      'https://api.jsonbin.io/v3/b/63b2eb5801a72b59f23e89b6/',
      {
        headers: this.apiUtils.adjustApiHeadersForJsonBin(
          '$..[?(@.teamId==' + teamId + ')]'
        ),
      }
    );
    const data = await response.json();
    return data;
  }
  async Save(team) {
    let postBody = JSON.stringify(team);

    const response = await fetch(
      'https://api.jsonbin.io/v3/b/63b2eb5801a72b59f23e89b6/',
      {
        method: 'PUT',
        headers: this.apiUtils.adjustApiHeadersForJsonBin(''),
        body: postBody,
      }
    );
    const data = await response.json();
    return data;
  }
}
