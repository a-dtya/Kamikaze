import React from 'react'
import Caloriedashboard from './caloriedashboard/page'
import ProfileComponent from './profiledashboard/page'
import Sidebar from '@/components/Sidebar'

type Props = {}

export default function page({}: Props) {
  return (<>
    <Sidebar/>
   </>
  )
}