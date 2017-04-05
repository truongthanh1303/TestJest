const RNFS = jest.geMockFromModule('react-native-fs');

function writeFile() {
  return null;
}

RNFS.writeFile = writeFile;
module.exports = RNFS;
