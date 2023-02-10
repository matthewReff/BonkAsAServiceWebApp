import './App.css';

import * as React from 'react';


import { SubmitButton } from './components/SubmitButton';
import { PageHeader } from './components/PageHeader';
import { ServerSelector } from './components/ServerSelector';
import { OffenseSelector } from './components/OffenseSelector';
import { getOffenses } from './services/bonkService/bonkServiceAccessor';

function App() {
    const [serverList, setServerList] = React.useState(["testServer", "229093679103606785"]);
    const [selectedServer, setSelectedServer] = React.useState('');
    const [offenseList, setOffenseList] = React.useState(new Array<String>);
    const [selectedOffense, setSelectedOffense] = React.useState('');
    const [userList, setUserList] = React.useState(new Array<String>);
    const [selectedUser, setSelectedUser] = React.useState('');

    function onLoadAvailableServers(serverList: string[]) {
        setServerList(serverList)
        setSelectedServer(serverList.at(0) ?? '')
    }

    function onLoadAvailableOffenses(offenseList: string[]) {
        setOffenseList(offenseList)
        setSelectedOffense(offenseList.at(0) ?? '')
    }

    function onLoadUserList(userList: string[]) {
        setUserList(userList)
        setSelectedUser(userList.at(0) ?? '')
    }

    function loadOffenses() {
        getOffenses(selectedServer ?? "")
        .then((offenseList) => {
            onLoadAvailableOffenses(offenseList)
        })
    }

    const submitOffense = () => {
        console.log("Server: " + selectedServer)
        console.log("User: " + selectedUser)
        console.log("Offense: " + selectedOffense)
        return
    }

    return (
        <div>
            <PageHeader/>
            <ServerSelector
                serverList = {serverList}
                selectedServer = {selectedServer}
                setServer = {setSelectedServer}
            />
            <OffenseSelector
                offenseList = {offenseList}
                selectedOffense = {selectedOffense}
                setOffense = {setSelectedOffense}
                userList = {userList}
                selectedUser = {selectedUser}
                setUser = {setSelectedUser}
            />
            <SubmitButton
                submitFunction = {submitOffense}
            />
            <SubmitButton
                submitFunction = {loadOffenses}
            />
        </div>
    );
}

export default App;