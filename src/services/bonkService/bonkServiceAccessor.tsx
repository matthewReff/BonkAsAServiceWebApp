import { RapSheet, ServerScopedUser } from "./bonkServiceModels"

const bonkApiBase = "https://testapi.tendec.dev"
const getOffensesPath = bonkApiBase + "/v1/getoffenses"

const getOffenses = async(serverId: string): Promise<string[]> => {
    var requestData = {
        "serverId": serverId
    }

    var response = await fetch(
        getOffensesPath,
        {
            method: "POST",
            body: JSON.stringify(requestData)
        }
    ).then(
        async(value: Response) => {
            return parseGetOffensesResponse(value)
        },
        async(reason) => {
            console.log("Failed request: " + reason)
            return []
        }
    )
    return response
}

const parseGetOffensesResponse = async(response: Response): Promise<string[]> => {
    const returnedData = await response.json()
    const offenseList = returnedData["offenses"]
    return offenseList
}

export { getOffenses }