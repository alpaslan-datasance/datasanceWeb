import CustomFooter from '@/components/custom-footer'
import CustomHeader from '@/components/custom-header'
import React from 'react'
import DatasanceFormRequestACall from './request-a-call'

function DatasanceForm() {
  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="bg-white">
          <CustomHeader></CustomHeader>
          <DatasanceFormRequestACall></DatasanceFormRequestACall>
          <CustomFooter></CustomFooter>
        </div>
      </div>
    </>
  )
}

export default DatasanceForm