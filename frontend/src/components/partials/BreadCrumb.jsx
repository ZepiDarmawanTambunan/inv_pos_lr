import React from 'react'
import { Helmet } from 'react-helmet'

const BreadCrumb = (props) => {
  return (
    <div>
        <Helmet>
          <title>{props.title} | Fashion Club BD</title>
        </Helmet>
        <ol class="breadcrumb my-4">
            <li class="breadcrumb-item text-dark">Dashboard</li>
            <li class="breadcrumb-item active">{props.title}</li>
        </ol>
    </div>
  )
}

export default BreadCrumb