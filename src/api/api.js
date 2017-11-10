import ApiUtils from './api-utils'
import * as Config from './config'

const Api = {
  test () {
    console.info(ApiUtils.setDefault)
    console.info('Config=>', Config.HostUrl)
  }
}
export default Api
