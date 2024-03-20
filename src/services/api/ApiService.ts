import { ApiServiceException, NotFoundException, UnprocessableEntityException } from "@/exceptions/api/ApiServiceException"

export class ApiService {
  protected static apiUrl: string = "http://localhost:6000/api/v1"
  protected static requestInit: RequestInit = {
    headers: {
      "accept" : "application/json",
      "content-type": "application/json"
    }
  }

  protected static async throwException(response: Response) {
    switch(response.status) {
      case 422:
        const errors = await response.json()
        throw new UnprocessableEntityException(errors)
      case 404:
        throw new NotFoundException
      default:
        throw new ApiServiceException(response.status)
    }
  }

  protected static toFormData(data: {[key: string]: string | Blob | number | boolean}): FormData {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value instanceof Blob ? value : value.toString())
    }
    return formData
  }
}