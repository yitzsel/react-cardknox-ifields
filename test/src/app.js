
import React from 'react';
import IField, { CARD_TYPE, CVV_TYPE } from 'react-cardknox-ifields';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        const account = {
            xKey: "",
            xSoftwareName: "react-cardknox-ifields",
            xSoftwareVersion: "1.0.0"
        };
        const threeds = {
            enable3DS: false,
            waitForResponse: false,
            waitForResponseTimeout: undefined,
            amount: 0,
            month: "01",
            year: "2020"
        };
        const ccoptions = {
            placeholder: 'Card Number',
            enableLogging: true,
            autoFormat: true,
            autoFormatSeparator: ' ',
            autoSubmit: false,
            iFieldstyle: {

            },
            iFrameStyle: {

            },
            iFrameClassName: 'ifieldiframe'
        };
        const cvvoptions = {
            placeholder: 'CVV',
            enableLogging: true,
            autoFormat: true,
            autoFormatSeparator: ' ',
            autoSubmit: true,
            iFieldstyle: {

            },
            iFrameStyle: {
                
            },
            iFrameClassName: 'ifieldiframe'
        };
        this.state = {
            account,
            threeds,
            ccoptions,
            cvvoptions,
            issuer: ''
        };
    }
    render() {
        return (
            <>
                <IField
                    type={CARD_TYPE}
                    account={this.state.account}
                    options={this.state.ccoptions}
                    threeDS={this.state.threeds}
                    issuer={this.state.issuer}
                    onLoad={this.onLoad}
                    onUpdate={this.onUpdate}
                    onSubmit={this.onSubmit}
                    onToken={this.onToken}
                    onError={this.onError}
                    src="https://cdn.cardknox.com/ifields/2.5.1905.0801/ifield.htm" />
                <IField
                    type={CVV_TYPE}
                    account={this.state.account}
                    options={this.state.cvvoptions}
                    threeDS={this.state.threeds}
                    issuer={this.state.issuer}
                    onLoad={this.onLoad}
                    onUpdate={this.onUpdate}
                    onSubmit={this.onSubmit}
                    onToken={this.onToken}
                    onError={this.onError}
                    src="https://cdn.cardknox.com/ifields/2.5.1905.0801/ifield.htm" />
            </>
        );
    }
    onLoad = () => {
        console.log("Iframe loaded");
    }
    onUpdate = (data) => {
        // console.log("Iframe Updated", data);
        this.setState({ issuer: data.issuer });
    }
    onSubmit = (data) => {
        console.log("IFrame submitted", data);
    }
    onToken = (data) => {
        console.log("IFrame sent token", data);
    }
    onError = (data) => {
        console.error("IFrame errored", data);
    }
}