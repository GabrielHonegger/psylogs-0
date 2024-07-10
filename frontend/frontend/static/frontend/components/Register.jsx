import React from 'react'
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function Register() {
  return (
    <Card className="w-full max-w-sm m-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl">Criar Conta</CardTitle>
        <CardDescription>
          Digite seu melhor email e crie uma senha forte para se registrar.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@exemplo.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Criar Conta</Button>
      </CardFooter>
    </Card>
  )
}
