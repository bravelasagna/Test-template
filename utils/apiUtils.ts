export default class ApiUtils {
  // add headers for jsonbin
  adjustApiHeadersForJsonBin(jsonPath) {
    let result = {
      'X-Master-Key':
        '$2b$10$6PtGzGkyKdW7B9Dy4oHJ1OxQ10u69hg7XT9FtLi1Au79hCegbLRLu',
      'X-Access-Key': '1',
      'X-Bin-Meta': 'false',
      'X-JSON-Path': jsonPath,
    };
    return result;
  }
}
