import React from 'react'
import { Helmet } from 'react-helmet'

const BreadCrumb = (props) => {
  return (
    <div>
        <Helmet>
          <title>{props.title} | Fashion Club BD</title>
        </Helmet>
        <ol className="breadcrumb my-4">
            <li className="breadcrumb-item text-dark">Dashboard</li>
            <li className="breadcrumb-item active">{props.title}</li>
        </ol>
    </div>
  )
}

export default BreadCrumb