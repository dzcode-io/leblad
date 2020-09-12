/* eslint-disable no-console */
const fs = require('fs');
const { promisify } = require('util');
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');


const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const ALGERIA_API_RELEASES_URL = 'https://api.github.com/repos/fcmam5/algeria-api/releases/latest';
const DATA_DIRECTORY = 'data';
const WILAYA_LIST_JSON_FILE_NAME = 'WilayaList.json';
const VERSION_FILE_PATH = `${DATA_DIRECTORY}/VERSION`;

(async () => {
  // Read the current dataset version
  const currentVersion = await readFileAsync(VERSION_FILE_PATH, { encoding: 'utf8' });

  // Fetch the latest data from https://github.com/Fcmam5/algeria-api
  const { data } = await axios.get(ALGERIA_API_RELEASES_URL);
  const { tag_name: tagName, html_url: tagURL, assets } = data;

  if (currentVersion === tagName) {
    console.log('🎉 Your dataset is up-to-date, Bye!');
  } else {
    console.warn(`⚠️ Another dataset version is present! Gonna update from "${currentVersion}" to "${tagName}"`);

    // Write data to data/wilayalist.json
    const wilayaListJsonFileUrl = assets.find(asset => asset.name === WILAYA_LIST_JSON_FILE_NAME).browser_download_url;
    const wilayaListJsonFileResponse = await axios({
      method: "get",
      url: wilayaListJsonFileUrl,
      responseType: "stream"
    });

    wilayaListJsonFileResponse.data.pipe(fs.createWriteStream(`${DATA_DIRECTORY}/${WILAYA_LIST_JSON_FILE_NAME}`));
    console.log(`  > Updated ${WILAYA_LIST_JSON_FILE_NAME}`);
    await writeFileAsync(VERSION_FILE_PATH, tagName);
    console.log(`  > Updated local version file`);

    console.warn(`\nPlease check "${tagURL}" to double-check if there's any breaking changes before commiting this`);
  }
})();

