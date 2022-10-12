import React from 'react'

export default  (props)=>{

    const {colomnNames,dataList,}=props
    return(
        <>
          {
        dataList.length==0?<div className="loader" role="status">
        
      </div>:
        <table className="table table-dark">
            <thead>
                <tr>
                    {
                        colomnNames?.map((cName)=>(
                    <th>{cName.title}</th>
                          
                        ))
                    }
                </tr>
            </thead>
            <tbody>

                {
                    dataList?.map((data)=>(
                     <tr>
                        {
                            colomnNames?.map((cName)=>(
                                <td>{cName.type=='img'?<img src={data[cName.key]}></img>:data[cName.key]}</td>
                            ))
                        }
                     </tr>
                    ))
                }
                
            </tbody>
        </table>
}</>
    )
} 