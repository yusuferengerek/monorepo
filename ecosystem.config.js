module.exports = {
  apps: [
    {
      name: 'Firewall',
      script: './src/firewall/index.js',
      exec_mode: 'cluster',
      instances: 'max',
      watch: true,
      max_memory_restart: '2G'
    },
    {
      name: 'Backend',
      script: './src/backend/index.js',
      exec_mode: 'cluster',
      watch: true,
      max_memory_restart: '1G'
    },
    {
      name: 'Frontend',
      script: 'cmd',
      args: '/c npm run start',
      cwd: './src/frontend',
      exec_mode: 'fork',
      watch: true,
      max_memory_restart: '1G'
    }
  ]
}
