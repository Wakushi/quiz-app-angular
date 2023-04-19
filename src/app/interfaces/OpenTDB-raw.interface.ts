import { OpenTDBQuestionnary } from "./OpenTDB-questionnary.interface"

export interface OpenTDBRaw {
    response_code: number
    results: OpenTDBQuestionnary[]
}
