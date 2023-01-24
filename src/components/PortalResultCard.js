import React from 'react'
//import './PortalResultCard.css'

const PortalResultCard = ({ result }) => {

  return (
    <div className='result-table'>
      <table>
        <tr className='table-header'>
          <th>Past Diagnosis</th>
        </tr>
        <tr>
          <th className="test-date">{result.test_date.split('-')[1]}/{result.test_date.split('-')[2].split('T')[0]}/{result.test_date.split('-')[0]}:</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr className='row'>
          <td>{result.diagnosis}</td>
        </tr>
        
        
      </table>
    </div>
  )
}

export default PortalResultCard