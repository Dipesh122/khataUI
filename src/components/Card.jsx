import React from 'react'

export default function Card(props) {
  return (
    <table className='table-auto border border-slate-500 mt-5 w-full'>
        <thead>
            <tr className=''>
                <th className='border border-slate-600'>Id</th>
                <th className='border border-slate-600'>Date</th>
                <th className='border border-slate-600'>Detail</th>
                <th className='border border-slate-600'>Cost</th>
                <th className='border border-slate-600'> Category</th>
                <th className='border border-slate-600'>Spend By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-slate-600 text-center'>1</td>
                <td className='border border-slate-600 text-center'>2022/3/45</td>
                <td className='border border-slate-600 text-center'>hi this is for testing..</td>
                <td className='border border-slate-600 text-center'>90,0000,000</td>
                <td className='border border-slate-600 text-center'>Buy car</td>
                <td className='border border-slate-600 text-center'>Dipesh_hero</td>
            </tr>
        </tbody>
    </table>
  )
}
