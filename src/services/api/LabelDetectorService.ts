import { Label } from "@/models/label";
import { ApiService } from "./ApiService";

type AnalyseProps = {
  file: File,
  maxResults?: number,
  minConfidenceLevel?: number
}

export class LabelDetectorService extends ApiService {

  public static async analyse(props: AnalyseProps): Promise<Label[]> {
    const endpoint = `${this.apiUrl}/analyse`
    const response = await fetch(endpoint, {
      ...this.requestInit,
      headers: {
        "accept": "application/json",
      },
      method: "POST",
      body: this.toFormData(props)
    })

    if(!response.ok) await this.throwException(response)
    return await response.json() as Label[]
  }
}
