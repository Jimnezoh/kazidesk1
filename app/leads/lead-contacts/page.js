import React from 'react'
import LeadContacts from '@/components/LeadContacts'
import EmployeeSearchBar from '@/components/Employeesearchbar'
import LeadContactSubheading from '@/components/LeadContactSubheading'

function page() {
  return (
    <div>
        <LeadContactSubheading />
        <EmployeeSearchBar />
      <LeadContacts />
    </div>
  )
}

export default page
