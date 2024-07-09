import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

const PatientTable = () => {
  return (
  <Table className='lg:w-1/3 w-11/12 m-auto'>
    <TableCaption>Lista dos Pacientes</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="">Nome</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Carlos</TableCell>
        <TableCell>Em andamento</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  )
}

export default PatientTable