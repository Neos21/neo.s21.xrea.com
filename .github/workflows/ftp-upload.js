const path = require('path');

const FtpClient = require('ftp-client');

/*!
 * 対象のファイルをビルドしてアップロードする
 */

// 前 Step で JSON ファイルに書き出しておいた変更ファイル一覧を取得する
// ファイルパスは `'docs/index.html'` のようにプロジェクトルートからの表記になっている
const addedModified = require('../../temp/added_modified.json');
const renamed       = require('../../temp/renamed.json');
const removed       = require('../../temp/removed.json');  // 削除されたファイルがあるかどうかの確認だけ
if(removed.length) console.log('Removed Files Exist. Please Remove Manually');

// `docs/` 配下の変更ファイルのみ扱う
const changedFiles = [...addedModified, ...renamed].filter(sourceFilePath => sourceFilePath.includes('docs'));
if(!changedFiles.length) return console.log('Changed Files Not Exist. Aborted');

// アップロード対象のディレクトリパスの配列を作る
const directoryPaths = (() => {
  const directoriesSet = new Set();
  changedFiles.forEach(filePath => {
    let directoryPath = filePath;
    while(directoryPath !== 'docs') {
      directoryPath = path.dirname(directoryPath);
      if(directoryPath === 'docs') break;  // `docs/` までさかのぼったら中止する
      directoriesSet.add(directoryPath);
    }
  });
  return Array.from(directoriesSet).sort();
})();

// 先にディレクトリを生成させるために結合する
const uploadFilePaths = [...directoryPaths, ...changedFiles];
console.log('Target File Paths :\n', changedFiles);

// アップロード対象のファイルを FTP アップロードする
(async () => {
  const ftpClient = new FtpClient({
    user    : 'neo',
    password: process.env['FTP_PASSWORD'],
    host    : 's21.xrea.com'
  }, {
    logging: 'debug',
    overwrite: 'all'
  });
  await new Promise(resolve => ftpClient.connect(() => resolve()));
  await new Promise((resolve, reject) => ftpClient.upload(
    uploadFilePaths,
    '/public_html',
    { baseDir: 'docs', overwrite: 'all' },
    result => (result.errors && Object.keys(result.errors).length) ? reject(result.errors) : resolve(result)
  ))
    .then(result => console.log(result))
    .catch(error => console.error(error));
  console.log('FTP Upload : Succeeded');
})();
