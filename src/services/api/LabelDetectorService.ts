import { Label } from "@/models/label";
import { ApiService } from "./ApiService";

type AnalyseProps = {
  image: string,
  maxResults?: number,
  minConfidenceLevel?: number
}

export class LabelDetectorService extends ApiService {

  public static async analyse({ image, maxResults, minConfidenceLevel }: AnalyseProps): Promise<Label[]> {
    const endpoint = `${this.apiUrl}/analyse`
    const response = await fetch(endpoint, {
      ...this.requestInit,
      method: "POST",
      body: JSON.stringify({
        image,
        maxResults,
        minConfidenceLevel
      })
    })

    if(!response.ok) await this.throwException(response)
    return await response.json() as Label[]
  }
}