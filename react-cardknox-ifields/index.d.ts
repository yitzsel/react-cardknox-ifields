
export interface Options {
    placeholder: string,
    enableLogging: boolean,
    autoFormat: boolean,
    autoFormatSeparator: string,
    autoSubmit: boolean,
    iFieldstyle: object,
    iFrameStyle: object,
    iFrameClassName: string
}

export interface ThreeDS {
    enable3DS: boolean,
    waitForResponse: boolean,
    waitForResponseTimeout: number,
    amount: number,
    month: string,
    year: string
}

export interface Account {
    xKey: string,
    xSoftwareName: string,
    xSoftwareVersion: string
}

export interface UpdateData {
    isEmpty: boolean,
    isValid: boolean,
    length: number,
    cardNumberLength: number
}

export interface SubmitData {
    formId: string
}

export interface TokenData {
    result: string,
    xToken: string,
    xTokenType: string,
    errorMessage: string
}

export interface Props {
    account: Account,
    threeds: ThreeDS,
    options: Options,
    issuer: string,
    type: string,
    src: string,
    onLoad: () => void,
    onUpdate: (data: UpdateData) => void,
    onSubmit: (data: SubmitData) => void,
    onToken: (data: TokenData) => void,
    onError: (data: TokenData) => void
}

export const CARD_TYPE: string;
export const CVV_TYPE: string;
export const ACH_TYPE: string;

export default class IField {
    constructor(props: Props) { }
}