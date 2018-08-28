export const env = process.env.VUE_APP_WEB

export const config =  {
  local: {
    appService: 'https://outerspace.qzg99.cn/api/app-service',
    user: 'local-user',
  },
  integration: {
    appService: 'https://outerspace.qzg99.cn/api/app-service',
    user: 'test-user'
  },
  production: {
    appService: 'https://outerspace.qzg99.cn/api/app-service',
    user: 'procution-user'
  }
}[env]
