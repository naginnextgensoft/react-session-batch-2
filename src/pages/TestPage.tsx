import React from 'react'
import { useParams } from 'react-router-dom'

const TestPage = () => {

    const response = useParams();

    console.log(response);
    return (
        <div>
            <h1>Hello, From TestPage</h1>
        </div>
    )
}

export default TestPage