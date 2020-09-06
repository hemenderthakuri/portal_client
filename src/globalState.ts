export interface GlobalState {
    firstName: string,
    lastName: string,
    type: string
}

const globalState = {
    firstName: "",
    lastName: "",
    type: ""
} as GlobalState;

export default globalState;

