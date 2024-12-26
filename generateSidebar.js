const fs = require('fs');
const path = require('path');

// 定义需要扫描的目录
const basePaths = {
  '/inspiration/': './docs/inspiration',
  '/notes/': './docs/notes',
};

// 动态生成配置
function generateSidebarConfig(basePath, dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const items = [];

  files.forEach((file) => {
    if (file.name.startsWith('.') || file.name === 'index.md' || !file.name.endsWith('.md')) return;

    const fileName = file.name.replace('.md', '');
    const link = `${basePath}${fileName === 'index' ? '' : fileName}`;

    items.push({
      text: fileName,
      link,
    });
  });

  return [
    {
      text: basePath.split('/').filter(Boolean).pop(),
      items,
    },
  ];
}

// 遍历 basePaths，生成所有配置
const sidebarConfig = Object.entries(basePaths).reduce((config, [basePath, dir]) => {
  config[basePath] = generateSidebarConfig(basePath, path.resolve(__dirname, dir));
  return config;
}, {});

// 写入到 sidebar.ts
const configContent = `
export const sidebar = ${JSON.stringify(sidebarConfig, null, 2)
  .replace(/"(\w+)":/g, '$1:')
  .replace(/"/g, "'")};
`;

fs.writeFileSync(path.resolve(__dirname, './docs/.vitepress/sidebar.ts'), configContent, 'utf-8');

console.log('Multi-sidebar configuration generated successfully!');
