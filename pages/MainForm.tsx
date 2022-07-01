import React, { useEffect, useState } from 'react'
import OSIntput from '../components/OSInput/component/OSIntput'
import Table from '../components/Table/component/Table'

const rows = [
    {
        os: "13412341",
        "ev-ex": "IC",
    },
    {
        os: "13412341",
        "ev-ex": "IC",
    },
    {
        os: "13412341",
        "ev-ex": "IC",
    },
]

const MainForm = () => {
    const [tableData, setTableData] = useState(rows)
    const [osData, setOsData] = useState({})
    const [shouldAddItem, setShouldAddItem] = useState(false)
    const [osDetails, setOsDetails] = useState({
        osPieces: "",
        osClient: ""
    })

    useEffect(() => {
        if (osData.oscode) {
            fetch(`http://localhost:3001/service-orders-detail/${osData.oscode}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setOsDetails({
                        osPieces: data.pieces,
                        osClient: data.client
                    })
                });
        }
    }, [osData])

    useEffect(() => {
        if (shouldAddItem === true) {
            const data = {
                serviceOrder: osData?.oscode.toString(),
                client: "Client2",
                operator: "Operator2",
                events: [{
                    type: "LW",
                    timestamp: "54654",
                    observation: "Observation",
                    location: {
                        lat: 12.158242,
                        long: -162.228897
                    }
                }
                ]
            }
            fetch("http://localhost:3001/service-orders", {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
            setTableData([...tableData, { os: osData?.oscode, "ev-ex": "IC" }])
            setShouldAddItem(false)
        }
    }, [shouldAddItem])

    return (
        <>
            <OSIntput setOsData={setOsData} osDetails={osDetails} setShouldAddItem={setShouldAddItem} />
            <Table data={tableData} />
        </>
    )
}

export default MainForm