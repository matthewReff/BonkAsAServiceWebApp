import { RapSheet, ServerScopedUser } from "./bonkServiceModels"

const bonkApiBase = "https://testapi.tendec.dev"
const getOffensesPath = bonkApiBase + "/v1/getoffenses"
const getRapsheetPath = bonkApiBase + "/v1/rapsheet"

const getOffenses = async(): Promise<String[]> => {
    var requestData = {
        "serverId": "testServer"
    }

    var response = await fetch(
        getOffensesPath,
        {
            method: "POST",
            body: JSON.stringify(requestData)
        }
    ).then(
        async(value: Response) => {
            const returnedData = await value.json()
            const offenseList = returnedData["offenses"]
            return offenseList
        },
        async(reason) => {
            console.log(reason)
            return []
        }
    )
    return []
}

const getRapsheet = async (): Promise<RapSheet> => {
    const user = new ServerScopedUser("", "")
    return new RapSheet(user, new Map<String, number>())
}

export { getOffenses, getRapsheet }