import { ChevronDown, ListOrdered, LogOut } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export const AccountMenu = () => (
  <Dialog>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex select-none items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/davi1985.png" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>

          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {/* {isLoadingProfile ? (
          <div className="5 space-y-1">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        ) : ( */}
          <>
            <span>Davi Silva</span>
            <span className="text-xs font-normal text-muted-foreground">
              davisilvaphoto@gmail.com
            </span>
          </>
          {/* )} */}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="flex flex-col">
          <span>Idioma</span>
          <span className="text-xs font-normal text-muted-foreground">
            Selecione o idioma preferido
          </span>
        </DropdownMenuLabel>

        <DialogTrigger asChild>
          <DropdownMenuItem>
            <button className="flex items-center w-full gap-2">
              <ReactCountryFlag countryCode="BR" className="leading:none" />
              <span>Português</span>
            </button>
          </DropdownMenuItem>
        </DialogTrigger>

        <DialogTrigger asChild>
          <DropdownMenuItem>
            <button className="flex items-center w-full gap-2">
              <ReactCountryFlag countryCode="US" className="leading:none" />
              <span>English</span>
            </button>
          </DropdownMenuItem>
        </DialogTrigger>

        <DropdownMenuSeparator />

        <DialogTrigger asChild>
          <DropdownMenuItem>
            <ListOrdered className="mr-2 h-4 w-4" />
            <span>Versículos favoritos</span>
          </DropdownMenuItem>
        </DialogTrigger>

        <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400">
          <button className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </Dialog>
)
