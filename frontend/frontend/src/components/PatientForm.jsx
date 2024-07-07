import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription }  from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"


const nucleos = [
  {
    id: "mae",
    label: "Mãe",
  },
  {
    id: "pai",
    label: "Pai",
  },
  {
    id: "irmaos",
    label: "Irmãos",
  },
  {
    id: "filhos",
    label: "Filhos",
  },
  {
    id: "avos",
    label: "Avós",
  },
]

const formSchema = z.object({
  apelido: z.string().min(1, {
    message: "Nome precisa ter mais 1 caracter.",
  }),
  idade: z.number({
    required_error: "A idade é obrigatória",
    invalid_type_error: "A idade é obrigatória"
  }).positive({
    message: "A idade precisa ser um número positivo."
  }).min(1).max(100),
  sexo: z.enum(["masculino", "feminino"], {
    required_error: "Escolha uma opção",
  }),
  nucleos: z.array(z.string()).refine((value) => value.some((nucleo) => nucleo), {
    message: "Você precisa escolher pelo menos um núcleo familiar.",
  }),
  religiao: z.enum(["cristianismo", "islamismo", "hinduismo", 
  "budismo", "judaismo", "espiritismo", "taoismo", "ateismo", "outra"], {
    required_error: "Escolha uma opção",
  }),
  escolaridade: z.enum(["infantil", "ef1", "ef2", 
  "medio", "tecnico", "superior-incompleto", 
  "superior-completo", "pos-graduacao", "pos-doutorado"], {
    required_error: "Escolha uma opção",
  }),
  trabalho: z.string().min(1, {
    message: "Insira a ocupação principal do paciente.",
  }),
})

export default function PatientForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apelido: "",
      idade: "",
      sexo: undefined,
      nucleos: [],
      trabalho: ""
    },
  });

  const handleSubmit = () => {

  }
  return (
    <div className="lg:w-1/3 w-11/12 m-auto flex flex-col gap-6">
      <h1 className="text-center text-2xl lg:text-3xl font-semibold">Novo Paciente</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-6">

          {/* Nome */}
          <FormField control={form.control} name="apelido" render={({field}) => {
            return <FormItem>
              <FormLabel htmlFor="apelido">Nome (Apelido ou iniciais)</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Ju" type="username" {...field}/>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }} />

          {/* Idade */}
          <FormField control={form.control} name="idade" render={({field}) => {
            return <FormItem>
              <FormLabel htmlFor="idade">Idade</FormLabel>
              <FormControl>
                <Input className="w-32" placeholder="Ex: 38" type="number" {...field}
                value={field.value || ''} // Ensure value is a string (React expects this)
                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : '')}/>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }} />

           {/* Sexo Biológico */}
           <FormField control={form.control} name="sexo" render={({field}) => {
            return <FormItem>
              <FormLabel htmlFor="sexo">Sexo Biológico</FormLabel>
              <FormControl>
                <RadioGroup className="flex justify-between w-60" onValueChange={field.onChange} {...field}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="masculino" id="masculino" />
                    <Label htmlFor="masculino">Masculino</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feminino" id="feminino" />
                    <Label htmlFor="feminino">Feminino</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }} />

          {/* Núcleo Familiar */}
          <FormField control={form.control} name="nucleos" render={({field}) => {
            return (
              <FormItem>
              <div className="mb-4">
                <FormLabel htmlFor="nucleos" className="text-base">Núcleo Familiar</FormLabel>
                <FormDescription>
                  Selecione o(s) núcleo(s) familiar(es) do paciente.
                </FormDescription>
              </div>
              {nucleos.map((nucleo) => (
                <FormField
                  key={nucleo.id}
                  control={form.control}
                  name="nucleos"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={nucleo.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(nucleo.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, nucleo.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== nucleo.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel htmlFor={`${nucleo.id}`} className="font-normal">
                          {nucleo.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
            )
          }} />

          {/* Religião */}
          <FormField control={form.control} name="religiao" render={({field}) => {
            return <FormItem>
              <FormLabel htmlFor="sexo">Religião</FormLabel>
              <FormControl>
                <RadioGroup className="grid grid-cols-2	gap-2" onValueChange={field.onChange} {...field}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cristianismo" id="cristianismo" />
                    <Label htmlFor="cristianismo">Cristianismo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="islamismo" id="islamismo" />
                    <Label htmlFor="islamismo">Islamismo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hinduismo" id="hinduismo" />
                    <Label htmlFor="hinduismo">Hinduísmo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="budismo" id="budismo" />
                    <Label htmlFor="budismo">Budismo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="judaismo" id="judaismo" />
                    <Label htmlFor="judaismo">Judaísmo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="espiritismo" id="espiritismo" />
                    <Label htmlFor="espiritismo">Espiritismo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="taoismo" id="taoismo" />
                    <Label htmlFor="taoismo">Taoísmo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ateismo" id="ateismo" />
                    <Label htmlFor="ateismo">Ateísmo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="outra" id="outra" />
                    <Label htmlFor="outra">Outra</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }} />

          {/* Escolaridade */}
          <FormField control={form.control} name="escolaridade" render={({field}) => {
            return <FormItem>
              <FormLabel htmlFor="escolaridade">Escolaridade</FormLabel>
              <FormControl>
              <Select>
                <SelectTrigger className="w-[180px] w-full">
                  <SelectValue placeholder="Nível de escolaridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Nível de escolaridade</SelectLabel>
                    <SelectItem value="infantil">Educação Infantil (Pré-escola)</SelectItem>
                    <SelectItem value="ef1">Ensino Fundamental I</SelectItem>
                    <SelectItem value="ef2">Ensino Fundamental II</SelectItem>
                    <SelectItem value="medio">Ensino Médio</SelectItem>
                    <SelectItem value="tecnico">Ensino Técnico e Profissionalizante</SelectItem>
                    <SelectItem value="superior-incompleto">Ensino Superior Incompleto</SelectItem>
                    <SelectItem value="superior-completo">Ensino Superior Completo</SelectItem>
                    <SelectItem value="pos-graduacao">Pós-Graduação</SelectItem>
                    <SelectItem value="pos-doutorado">Pós-Doutorado</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }} />

          {/* Atividade Laborial */}
          <FormField control={form.control} name="trabalho" render={({field}) => {
            return <FormItem>
              <FormLabel htmlFor="trabalho">Atividade Laboral</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Arquiteto" type="text" {...field}/>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          }} />

          {/* Sumbmit Button */}
          <Button type="submit" className="m-auto text-center mt-8 flex w-full">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  )
}
