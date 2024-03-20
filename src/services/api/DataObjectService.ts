import { ApiService } from "./ApiService";

type UploadProps = {
  file: Blob,
  name: string
}

export class DataObjectService extends ApiService {

  public static async upload({ file, name }: UploadProps) {
    const endpoint = `${this.apiUrl}/upload`
    const response = await fetch(endpoint, {
      ...this.requestInit,
      method: "POST",
      body: this.toFormData({
        file,
        name
      })
    })

    if(!response.ok) await this.throwException(response)
    return await response.json() as { name: string }
  }

  public static async publish(name: string) {
    const endpoint = `${this.apiUrl}/publish/${name}`
    const response = await fetch(endpoint, {
      ...this.requestInit,
      method: "GET",
    })

    if(!response.ok) await this.throwException(response)
    return await response.json() as { url: string }
  }

}