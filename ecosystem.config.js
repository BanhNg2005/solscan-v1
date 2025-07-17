module.exports = {
  apps: [
    {
      name: "clone-solscan",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
