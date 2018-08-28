import { appService } from './instance.js'

export const getuserInfo = async () => {
  return await appService.get('/quote/instrument/latestQuote', {
    params: {
      instrumentIds: 'rb0001'
    }
  })
}
