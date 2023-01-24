import React from 'react'
//import './PortalResultCard.css'

const PortalResultCard = ({ result }) => {

  return (
    <div className='result-table flex justify-center md:my-16 my-8 mx-8'>
      <table className=''>
        <tr className='table-header'>
          <th className='pb-4 header'>Past Diagnosis</th>
        </tr>
        <tr>
          <th className="test-date pb-4 font-normal text-sky-500 md:text-xl">{result.test_date.split('-')[1]}/{result.test_date.split('-')[2].split('T')[0]}/{result.test_date.split('-')[0]}</th>
        </tr>
        <tr className='row font-light md:text-xl text-lg text-center'>
          <td>{result.diagnosis}</td>
        </tr>
        
        
      </table>
    </div>
  )
}

export default PortalResultCard