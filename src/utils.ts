export class SimpreadStorage {
  private readonly _storage: typeof simpreadStorage
  private readonly _pluginId: string
  private cachedData: any

  constructor(pluginId: string, storage: typeof simpreadStorage) {
    this._storage = storage
    this._pluginId = pluginId
  }

  async write(data: any, key: string) {
    const currentData = this.cachedData ? this.cachedData : data
    if (key) currentData[key] = await this.read(key)
    return new Promise(resolve => this._storage(this._pluginId, currentData, it => resolve(it)))
  }

  async read(key?: string, defaultValue?: any) {
    const data: any = await new Promise(resolve => this._storage(this._pluginId, undefined, result => resolve(result)))
    if (key) {
      if (defaultValue) {
        if (data.hasOwnProperty(key) && data[key]) return data[key]
        else {
          this.cachedData = data
          await this.write(defaultValue, key)
          this.cachedData = null
          return defaultValue
        }
      }
      return data[key]
    }
    return data
  }
}
