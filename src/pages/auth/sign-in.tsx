import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const SignIn = () => {
  return (
    <>
      <Helmet title="Faça login" />

      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Daily Verses
          </h1>

          <p className="text-sm text-muted-foreground">
            Leia, salve e compartilhe seus versículos bíblicos favoritos!
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" placeholder="email@email.com" />
          </div>

          <Button className="w-full" type="submit">
            Acessar agora
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com os nossos{' '}
            <a href="" className="underline underline-offset-4">
              Termos de Serviço
            </a>{' '}
            e{' '}
            <a href="" className="underline underline-offset-4">
              Políticas de Privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </>
  )
}
